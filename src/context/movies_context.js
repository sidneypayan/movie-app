import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/movies_reducer'
import { movies_url as url } from '../utils/constants'

const MoviesContext = React.createContext()
const API_KEY = '9d64e2a5fae568c0beed810bbf76d497'
const SEARCH_MOVIE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

const initialState = {
	loading: false,
	error: false,
	searching: false,
	category: 'popular',
	movies: [],
	nbPages: 0,
	currentPage: 1,
	query: '',
}

export const MoviesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const fullUrl = `${url}${state.category}?api_key=${API_KEY}&page=`

	const fetchMovies = async (url, page) => {
		dispatch({ type: 'GET_MOVIES_BEGIN' })
		try {
			const response = await fetch(`${url}${page}`)
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

	const setQuery = query => {
		dispatch({ type: 'SET_QUERY', payload: query })
	}

	const searchMovie = async (url, query, page) => {
		dispatch({ type: 'GET_MOVIES_BEGIN' })
		try {
			const response = await fetch(`${url}${query}&page=${page}`)
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
		if (state.searching) {
			searchMovie(SEARCH_MOVIE_URL, state.query, state.currentPage)
		} else {
			fetchMovies(fullUrl, state.currentPage)
		}
	}, [fullUrl, state.currentPage, state.searching, state.query])

	return (
		<MoviesContext.Provider value={{ ...state, dispatch, setQuery }}>
			{children}
		</MoviesContext.Provider>
	)
}

export const useMoviesContext = () => {
	return useContext(MoviesContext)
}
