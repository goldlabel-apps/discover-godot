import React from 'react'
import { 
  CssBaseline,
  Avatar,
  Box,
  Card,
  CardHeader,
  createTheme, 
  ThemeProvider,
  MenuList,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import {
  useAppSelector,
  useAppDispatch,
} from "./app/hooks"
import { selectGames, setGames } from "./features/games/gamesSlice"
import { Icon, getDesignTokens } from "./theme"
import FooterActions from "./components/FooterActions"

function App() {
  const debuggerOn = false
  const games = useAppSelector(selectGames)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    const { started } = games.data
    // console.log ("started", started)
    if (! started ){
      dispatch( setGames({key: "started", value: true}))
    }
  }, [games, dispatch])

  const appStyle = {
    margin: "auto",
    width: 350,
    // height: "100vh",
    // display: "flex",
    position: "relative",
    // textAlign: "center",
  }

  const onGameClick = (game: string) => {
    window.open( `/games/${game}/${game}.html` ,"_blank")
  }


  const themeMode = createTheme(getDesignTokens("light"))

  return <ThemeProvider theme={themeMode}>
          <CssBaseline />
          <Box sx={ appStyle }>
            <Box sx={{ m: 2}}>
              <Card>
              <CardHeader
                avatar={<Avatar src="./logo32.png" />}
                title="Select Game"
                
              />
                <MenuList>
                  
                  <ListItem button onClick={() => { onGameClick("Bouncy") }} > 
                    <ListItemText 
                      primary="Bouncy"
                    />
                    <ListItemIcon>
                    <Icon icon="newtab" color="secondary" />
                  </ListItemIcon>
                  </ListItem>  
                  
                </MenuList>

                <FooterActions />
              </Card>
            </Box>
          </Box>

          { debuggerOn ? <pre>
          { JSON.stringify( games.data, null, 2 ) }
          </pre> : null }
          
        </ThemeProvider>
}

export default App

/*
avatar={<IconButton onClick={() => { console.log ("home") }}>
                          <Avatar src="./logo32.png" />
                        </IconButton>}



<ListItem  button onClick={() => { onGameClick("CrashCourse") }} >
                    <ListItemIcon>
                      <Icon icon="newtab" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="CrashCourse"
                    />
                  </ListItem>

                  <ListItem button onClick={() => { onGameClick("SlotMachine") }} >
                    <ListItemIcon>
                      <Icon icon="newtab" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Slot Machine"
                    />
                  </ListItem>


                        */