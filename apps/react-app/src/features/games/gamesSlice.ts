import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface GamesState {
  data: any
}

const initialState: GamesState = {
  data: {
    proxyApiUrl: "https://discover-godot.web.app/api/",
  }
}

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload
      state.data = {
          ...state.data,
          [key]: value,
      }
    },
  },
})

export const { setGames } = gamesSlice.actions
export const selectGames = (state: RootState) => state.games
export default gamesSlice.reducer
