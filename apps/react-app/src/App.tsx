import React from 'react'
import { 
  CssBaseline,
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  MenuList,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material'
import {
  useAppSelector,
  useAppDispatch,
} from "./app/hooks"
import { selectGames, setGames } from "./features/games/gamesSlice"
import { Icon } from "./theme"

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

  return <React.Fragment>
          <CssBaseline />
          <Box sx={ appStyle }>
            <Box sx={{ m: 2}}>
              <Card>
              <CardHeader
                avatar={<Avatar src="./logo32.png" />}
                title="Godot Crash Course"
                subheader="Select Game"
                
              />
              <CardContent>
                <MenuList>
                  <ListItem  button onClick={() => { onGameClick("CrashCourse") }} >
                    <ListItemIcon>
                      <Icon icon="newtab" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="CrashCourse"
                      secondary="working"
                    />
                  </ListItem>
                  <ListItem button onClick={() => { onGameClick("SlotMachine") }} >
                    <ListItemIcon>
                      <Icon icon="newtab" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Slot Machine"
                      secondary="broken"
                    />
                  </ListItem>
                </MenuList>
                </CardContent>
                <CardActions sx={{ pl: 1 }}>
                  <IconButton
                    onClick={() => { 
                      window.open("https://github.com/listingslab-software/discover-godot","_blank")
                    }}>
                    <Icon icon="github" />
                  </IconButton>
                </CardActions>
              </Card>
            </Box>
          </Box>

          { debuggerOn ? <pre>
          { JSON.stringify( games.data, null, 2 ) }
          </pre> : null }
          
        </React.Fragment>
}

export default App

/*
avatar={<IconButton onClick={() => { console.log ("home") }}>
                          <Avatar src="./logo32.png" />
                        </IconButton>}
*/