import React, { useContext, useEffect, useReducer } from 'react'

import reducer from '../reducers/movies_reducer'
import {
	movies_url as url,
	search_movie_url as search_url,
} from '../utils/constants'

const MoviesContext = React.createContext()

const initialState = {
	loading: false,
	error: false,
	category: '',
	movies: [],
	favoriteMovies: JSON.parse(localStorage.getItem('favorite')) || [],
	watchedMovies: JSON.parse(localStorage.getItem('watched')) || [],
	nbPages: 0,
	currentPage: 1,
	query: '',
}

export const MoviesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const setQuery = query => {
		dispatch({ type: 'SET_QUERY', payload: query })
	}

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

	const addMovieToDB = (category, movie) => {
		if (
			category === 'watched' &&
			state.favoriteMovies.some(item => item.id === movie.id)
		) {
			removeMovieFromDB('favorite', movie.id)
			dispatch({
				type: 'ADD_MOVIE_TO_DB',
				payload: { category, movie },
			})
			return
		}
		if (
			category === 'favorite' &&
			state.watchedMovies.some(item => item.id === movie.id)
		) {
			removeMovieFromDB('watched', movie.id)
			dispatch({
				type: 'ADD_MOVIE_TO_DB',
				payload: { category, movie },
			})
			return
		}

		dispatch({
			type: 'ADD_MOVIE_TO_DB',
			payload: { category, movie },
		})
	}

	const removeMovieFromDB = (category, id) => {
		dispatch({ type: 'REMOVE_MOVIE_FROM_DB', payload: { category, id } })
	}

	const getMoviesFromDB = category => {
		let newMovies
		let pages
		if (category === 'favorite') {
			newMovies = state.favoriteMovies
		}
		if (category === 'watched') {
			newMovies = state.watchedMovies
		}
		console.log('get movies from DB')
		dispatch({ type: 'GET_MOVIES_SUCCESS', payload: newMovies })
		dispatch({ type: 'GET_NUMBER_OF_PAGES', payload: pages })
	}

	useEffect(() => {
		localStorage.setItem('favorite', JSON.stringify(state.favoriteMovies))
		if (state.category === 'favorite') {
			getMoviesFromDB('favorite')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.favoriteMovies, state.category])

	useEffect(() => {
		localStorage.setItem('watched', JSON.stringify(state.watchedMovies))
		if (state.category === 'watched') {
			getMoviesFromDB('watched')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.watchedMovies, state.category])

	useEffect(() => {
		if (state.category === 'favorite' || state.category === 'watched') {
			getMoviesFromDB(state.category)
		} else if (state.query) {
			searchMovie(search_url, state.query, state.currentPage)
		} else if (state.category) {
			fetchMovies(
				`${url}${state.category}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=`,
				state.currentPage
			)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.category, state.currentPage, state.query])

	return (
		<MoviesContext.Provider
			value={{
				...state,
				dispatch,
				setQuery,
				addMovieToDB,
				removeMovieFromDB,
			}}>
			{children}
		</MoviesContext.Provider>
	)
}

export const useMoviesContext = () => {
	return useContext(MoviesContext)
}
