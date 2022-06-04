import React from 'react'
import {
  useAppSelector,
} from "./app/hooks"
import { selectGames } from "./features/games/gamesSlice"

function App() {
  const games = useAppSelector(selectGames)
  //console.log("games", games)

  return (
    <div className="react-app">
       Games Slice
      <pre>
        { JSON.stringify( games, null, 2 ) }
      </pre>
    </div>
  )
}

export default App
