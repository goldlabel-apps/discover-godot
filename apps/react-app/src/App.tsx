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
    maxWidth: 640,
    position: "relative",
  }

  const onGameClick = (game: string) => {
    window.open( `/games/${game}/${game}.html` ,"_self")
  }

  const onCodeClick = (url: string) => {
    window.open( url ,"_blank")
  }

  const themeMode = createTheme(getDesignTokens("light"))

  const items = [
    {
      gameSlug: "Textify",
      title: "Floating Numbers",
      intro: "Click on the big button to see the numbers fly",
      icon: "https://discover-godot.web.app/games/Textify/Textify.icon.png",
      githubUrl: "https://github.com/listingslab-software/discover-godot/tree/master/games/Textify",
    },
    {
      gameSlug: "FluffyHead",
      title: "Fluffy Headed Silly Game",
      intro: "Use your arrow keys & just bounce about a bit",
      icon: "https://discover-godot.web.app/games/FluffyHead/FluffyHead.icon.png",
      githubUrl: "https://github.com/listingslab-software/discover-godot/tree/master/games/FluffyHead",
    },
    {
      gameSlug: "Physics",
      title: "That's Physics, that is.",
      intro: "Fling the Pingpong ball around with gestures",
      icon: "https://discover-godot.web.app/games/Physics/Physics.icon.png",
      githubUrl: "https://github.com/listingslab-software/discover-godot/tree/master/games/Physics",
    },
    {
      gameSlug: "Bouncy",
      title: "Bouncy",
      intro: "Simple bouncing ball animation",
      icon: "https://discover-godot.web.app/games/Bouncy/Bouncy.icon.png",
      githubUrl: "https://github.com/listingslab-software/discover-godot/tree/master/games/Bouncy",
    },
    {
      gameSlug: "SlotMachine",
      title: "SlotMachine",
      intro: "Not working :(",
      icon: "https://discover-godot.web.app/games/SlotMachine/SlotMachine.icon.png",
      githubUrl: "https://github.com/listingslab-software/discover-godot/tree/master/games/SlotMachine",
    },
    {
      gameSlug: "JsonLoader",
      title: "External Communication",
      intro: "Save and load JSON. Kind of.",
      icon: "https://discover-godot.web.app/games/JsonLoader/JsonLoader.icon.png",
      githubUrl: "https://github.com/listingslab-software/discover-godot/tree/master/games/JsonLoader",
    },
  ]

  return <ThemeProvider theme={themeMode}>
          <CssBaseline />
          <Box sx={ appStyle }>
            <Box sx={{ m: 2}}>
              <Card>
                <CardHeader title="Godot" />
                <MenuList>

                  { items.map((item,i) => {
                    
                    const { gameSlug, title, intro, githubUrl, icon } = item

                    return <ListItem key={`game_${i}`} button 
                              onClick={() => { onGameClick(gameSlug) }}>
                            <ListItemAvatar>
                              <Avatar src={ icon } />
                            </ListItemAvatar>
                            <ListItemText 
                              primary={ title }
                              secondary={ intro}
                            />
                            <ListItemIcon>
                              <IconButton onClick={() => { onCodeClick(githubUrl) }}>
                                <Icon icon="code" />
                              </IconButton>
                            </ListItemIcon>
                          </ListItem>
                  }) }
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

                  listItemGame = {
                    gameId: "0123",
                    
                  } 
  
  { items.map((item,i) => {
                  return null;
                }) }
  
                  */