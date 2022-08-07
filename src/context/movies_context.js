import React, { useContext, useEffect, useReducer } from 'react'

import reducer from '../reducers/movies_reducer'

const API_ENDPOINT = `https://api.themoviedb.org/3/`

const MoviesContext = React.createContext()

const initialState = {
	movies_loading: false,
	movies_error: false,
	movies: [],
	category: '',
	single_movie_loading: false,
	single_movie_error: false,
	movie: {},
	favoriteMovies: JSON.parse(localStorage.getItem('favorite')) || [],
	watchedMovies: JSON.parse(localStorage.getItem('watched')) || [],
	nbPages: 0,
	currentPage: '',
	query: '',
}

export const MoviesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	console.log(state.movies)

	const setQuery = query => {
		dispatch({ type: 'SET_QUERY', payload: query })
	}

	const fetchMovies = async url => {
		dispatch({ type: 'GET_MOVIES_BEGIN' })
		try {
			const response = await fetch(url)
			const movies = await response.json()

			let pages = movies.total_pages

			if (pages > 500) {
				pages = 500
			}

			dispatch({ type: 'GET_NUMBER_OF_PAGES', payload: pages })
			dispatch({ type: 'GET_MOVIES_SUCCESS', payload: movies.results })
		} catch (error) {
			dispatch({ type: 'GET_MOVIES_ERROR' })
		}
	}

	const fetchSingleMovie = async url => {
		dispatch({ type: 'GET_SINGLE_MOVIE_BEGIN' })
		try {
			const response = await fetch(url)
			const singleMovie = await response.json()
			dispatch({ type: 'GET_SINGLE_MOVIE_SUCCESS', payload: singleMovie })
		} catch (error) {
			dispatch({ type: 'GET_SINGLE_MOVIE_ERROR' })
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
		if (category === 'favorite') {
			newMovies = state.favoriteMovies
		}
		if (category === 'watched') {
			newMovies = state.watchedMovies
		}

		dispatch({ type: 'GET_MOVIES_SUCCESS', payload: newMovies })
	}

	const searchInUserDB = query => {
		dispatch({
			type: 'SEARCH_MOVIE_IN_USER_DB',
			payload: query,
		})
	}

	// useEffect

	useEffect(() => {
		if (state.category === 'favorite' || state.category === 'watched') {
			if (state.query) {
				searchInUserDB(state.query)
				return
			} else {
				getMoviesFromDB(state.category)
				return
			}
		} else if (state.category) {
			if (state.query) {
				fetchMovies(
					`${API_ENDPOINT}search/movie?api_key=9d64e2a5fae568c0beed810bbf76d497&query=${state.query}&page=${state.currentPage}`
				)
				return
			} else {
				fetchMovies(
					`${API_ENDPOINT}movie/${state.category}?api_key=9d64e2a5fae568c0beed810bbf76d497&page=${state.currentPage}`
				)
				return
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.category, state.currentPage, state.query])

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
		dispatch({ type: 'CHANGE_PAGE', payload: 1 })
	}, [state.category])

	return (
		<MoviesContext.Provider
			value={{
				...state,
				dispatch,
				setQuery,
				addMovieToDB,
				removeMovieFromDB,
				fetchSingleMovie,
			}}>
			{children}
		</MoviesContext.Provider>
	)
}

export const useMoviesContext = () => {
	return useContext(MoviesContext)
}
