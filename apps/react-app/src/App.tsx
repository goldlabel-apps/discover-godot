import React from 'react'
import { 
  CssBaseline,
  Box,
  Typography,
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
            <Box sx={{ m: 3}}>
              <Typography variant="h4" sx={{ fontWeight: "lighter" }} gutterBottom>
                Godot Games
              </Typography>
              
              <MenuList sx={{ mb: 2 }} color="primary" dense>
                <ListItem button onClick={() => { onGameClick("Pingpong") }} >
                  <ListItemIcon>
                    <Icon icon="newtab" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Pingpong"
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
              
              

            </Box>

          
          </Box>

            <Box sx={{
              position: "absolute",
              height: 50,
              width: 50,
              bottom: 0, right: 0
            }}>
              <IconButton>
                <Icon icon="github" />
              </IconButton>
            </Box>

          { debuggerOn ? <pre>
          { JSON.stringify( games.data, null, 2 ) }
          </pre> : null }
          
        </React.Fragment>
}

export default App

