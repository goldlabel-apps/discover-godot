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
  ListItemAvatar,
  ListItemText,
  IconButton,
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
    position: "relative",
  }

  const onGameClick = (game: string) => {
    window.open( `/games/${game}/${game}.html` ,"_blank")
  }

  const onCodeClick = (url: string) => {
    window.open( url ,"_blank")
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
                  
                  <ListItem  > 
                    <ListItemAvatar>
                      <Avatar src="https://discover-godot.web.app/games/Bouncy/Bouncy.icon.png" />
                    </ListItemAvatar>
                    <ListItemText 
                      primary="Bouncy Ball"
                    />
                    <ListItemIcon>
                      <IconButton onClick={() => { onGameClick("Bouncy") }}>
                        <Icon icon="newtab" />
                      </IconButton>
                      <IconButton onClick={() => { onCodeClick("") }}>
                        <Icon icon="code" />
                      </IconButton>
                    </ListItemIcon>
                  </ListItem>  

                  <ListItem> 
                    <ListItemAvatar>
                      <Avatar src="https://discover-godot.web.app/games/JsonLoader/JsonLoader.icon.png"/>
                    </ListItemAvatar>
                    <ListItemText 
                      primary="JSON Loader"
                    />
                    <ListItemIcon>
                      <IconButton onClick={() => { onGameClick("JsonLoader") }}>
                        <Icon icon="newtab" />
                      </IconButton>
                      <IconButton onClick={() => { onCodeClick("") }}>
                        <Icon icon="code" />
                      </IconButton>
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