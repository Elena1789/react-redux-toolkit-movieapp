import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './FilmDetail.scss'
import { useParams } from 'react-router-dom'
import { getFilmDetails } from '../../../store/reducers/actions'

const FilmDetails = () => {

  const { id } = useParams()
  const  film = useSelector(state => state.films.filmSelected)
  const dispatch = useDispatch()
  const API_IMG = 'https://image.tmdb.org/t/p/w500/'


  useEffect(() => {
       dispatch(getFilmDetails(id))
  }, [id])

  return (
    <div>
      <Link to='/films/list'>
        <button> retour </button>
      </Link>
      <div>
        {film && (
          <div className="filmDetail">
            <img src={API_IMG + film.poster_path} />
            <div className="filmInfo">
              <h3>{film.original_title}</h3>
              <div>{film.overview}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FilmDetails
