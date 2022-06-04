import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface GamesState {
  data: any
}

const initialState: GamesState = {
  data:{
    nothing: 123,
  }
}

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state) => {
      state.data += 1
    },
  },
})

export const { setGames } = gamesSlice.actions
export const selectGames = (state: RootState) => state.games
export default gamesSlice.reducer
