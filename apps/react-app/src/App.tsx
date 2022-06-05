import React from 'react'
import { 
  Box,
  Button,
  Typography,
  CssBaseline,
} from '@mui/material'
import {
  useAppSelector,
  useAppDispatch,
} from "./app/hooks"
import { selectGames, setGames } from "./features/games/gamesSlice"

function App() {
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

  const debuggerOn = false

  return <React.Fragment>
          <CssBaseline />
          <Box sx={ appStyle }>
            <Box sx={{ m: 3, flexGrow:1}}>
              <Typography variant="h2" gutterBottom>
                Games
              </Typography>

              <Button
                fullWidth
                variant="contained"
              >
              Pingpong
              </Button>
            </Box>
            
            
          </Box>

          { debuggerOn ? <pre>
          { JSON.stringify( games.data, null, 2 ) }
          </pre> : null }
          
        </React.Fragment>
}

export default App

/*
    borderRadius: 2,
    border: "1px solid rgba(0,0,0,0.09)",
    background: "rgba(0,0,0,0.01)",
*/