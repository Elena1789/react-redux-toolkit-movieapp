import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './List.scss'
import { getFilms } from '../../../store/reducers/actions'
import { NavLink } from 'react-router-dom'

const FilmList = () => {
  const dispatch = useDispatch()
  const {list} = useSelector(state => state.films)

  useEffect(() => {
    dispatch(getFilms())
    }, [dispatch])

  return (
    <div>
      {list.map(film => (
        <NavLink
          to={'/films/' + film.id}
          key={film.id}
          style={{ textDecoration: 'none' }}
        >
          <div className="info">
            <h3>{film.original_title}</h3>
            <div className="overview">{film.overview}</div>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default FilmList
