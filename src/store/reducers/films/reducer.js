import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  filmSelected: null,
}

export const filmsSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    populateFilms: (state = initialState, action) => {
      state.list = action.payload
    },

    setFilmSelected: (state = initialState, action) => {
      state.filmSelected = action.payload
    },
  }
})

export const { populateFilms, setFilmSelected } = filmsSlice.actions
export default filmsSlice.reducer
