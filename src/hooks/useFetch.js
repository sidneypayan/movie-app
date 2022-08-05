import { useEffect } from 'react'
import { useMoviesContext } from '../context/movies_context'
const API_ENDPOINT = `https://api.themoviedb.org/3/`
const CATEGORY_URL = `movie/${state.category}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=`
const SEARCH_MOVIE_URL = `search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=`

const useFetch = urlParams => {
	const { dispatch } = useMoviesContext()

	const fetchMovies = async url => {
		dispatch({ type: 'GET_MOVIES_BEGIN' })
		try {
			const response = await fetch(url)
			const data = await response.json()
			let pages = data.total_pages

			if (pages > 500) {
				pages = 500
			}

			dispatch({ type: 'GET_NUMBER_OF_PAGES', payload: pages })
			dispatch({ type: 'GET_MOVIES_SUCCESS', payload: data.results })
		} catch (error) {
			dispatch({ type: 'GET_MOVIES_ERROR' })
		}
	}

	useEffect(() => {
		fetchMovies(`${API_ENDPOINT}${urlParams}`)
	}, [urlParams])
}

export default useEffect
