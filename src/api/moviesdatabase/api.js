import axios from 'axios'

const URL = 'https://api.themoviedb.org/3/'

export const api_key = 'your own api key'
export const instance = axios.create({ baseURL: URL })

instance.interceptors.response.use(
  response => {
    if (response.data.results) {
      return response.data.results
    }
    return response.data
  },
  error => {
    if (error.response.status === 404) {
      window.location.href = '*'
    }
    return Promise.reject(error)
  }
)

export const getFilmsList = {
  fetchFilms () {
    return instance.get(`movie/top_rated`, { params: { api_key } })
  }
}

export const getDetails = {
  fetchFilm (id) {
    return instance.get(`movie/${id}`, { params: { api_key } })
  }
}
