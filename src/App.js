import React from 'react'
import "./styles.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Views/Home/Home'
import Films from './Views/Films'
import FilmsList from './Views/Films/List/List'
import FilmDetail from './Views/Films/FilmDetails/FilmDetails'
import { AppRoutes } from './const/routes'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path={AppRoutes.Home} element={<Films />}>
            <Route index element={<Home />} />
            <Route path={AppRoutes.List} element={<FilmsList />} />
            <Route path={AppRoutes.Film} element={<FilmDetail />} />
          </Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
