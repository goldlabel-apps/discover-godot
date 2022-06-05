import React from 'react'
import { 
  CssBaseline,
  Box,
  Typography,
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
import { Icon } from "./theme"

function App() {
  const debuggerOn = true
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
    height: "100vh",
    display: "flex",
    textAlign: "center",
  }

  const onGameClick = (game: string) => {
    window.open( `/games/${game}/${game}.html` ,"_blank")
  }

  return <React.Fragment>
          <CssBaseline />
          <Box sx={ appStyle }>
            <Box sx={{ m: 3, flexGrow:1}}>
              <Typography variant="h4" sx={{ fontWeight: "lighter" }} gutterBottom>
                Play Game
              </Typography>
              
              <MenuList>
                <ListItem button onClick={() => { onGameClick("Pingpong") }} >
                  <ListItemText 
                    primary="Pingpong"
                    secondary="working"
                  />
                  <ListItemIcon>
                    <Icon icon="newtab" />
                  </ListItemIcon>
                </ListItem>

                <ListItem button onClick={() => { onGameClick("SlotMachine") }} >
                  <ListItemText 
                    primary="Slot Machine"
                    secondary="broken"
                  />
                  <ListItemIcon>
                    <Icon icon="newtab" />
                  </ListItemIcon>
                </ListItem>
              </MenuList>
            </Box>
          </Box>

          { debuggerOn ? <pre>
          { JSON.stringify( games.data, null, 2 ) }
          </pre> : null }
          
        </React.Fragment>
}

export default App

