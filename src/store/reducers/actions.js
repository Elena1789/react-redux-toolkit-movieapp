import { populateFilms, setFilmSelected } from '../reducers/films/reducer'
import { getFilmsList, getDetails }  from '../../api/moviesdatabase/api'

export const getFilms = () => async dispatch => {
  try {
    const res = await getFilmsList.fetchFilms()
    dispatch(populateFilms(res))
  } catch (err) {
    console.log(err)
  }
}

export const getFilmDetails = (id) => async dispatch => {
  try {
    const res = await getDetails.fetchFilm(id)
    console.log(res)
    dispatch(setFilmSelected(res))
  } catch (err) {
    console.log(err)
  } 
}
