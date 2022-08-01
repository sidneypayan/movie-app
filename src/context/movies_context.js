import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/movies_reducer'
import { movies_url as url } from '../utils/constants'

const MoviesContext = React.createContext()

const initialState = {
	loading: false,
	error: false,
	category: 'popular',
	movies: [],
	nbPages: 0,
	currentPage: 1,
}

export const MoviesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const fetchMovies = async (url, page) => {
		dispatch({ type: 'GET_MOVIES_BEGIN' })
		try {
			const response = await fetch(`${url}${page}`)
			const data = await response.json()
			dispatch({ type: 'GET_NUMBER_OF_PAGES', payload: data.total_pages })
			dispatch({ type: 'GET_MOVIES_SUCCESS', payload: data.results })
		} catch (error) {
			dispatch({ type: 'GET_MOVIES_ERROR' })
		}
	}

	const fetchSingleMovie = async url => {}

	useEffect(() => {
		fetchMovies(url, state.currentPage)
	}, [state.currentPage])

	return (
		<MoviesContext.Provider value={{ ...state, dispatch }}>
			{children}
		</MoviesContext.Provider>
	)
}

export const useMoviesContext = () => {
	return useContext(MoviesContext)
}
