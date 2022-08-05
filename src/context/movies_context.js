import React, { useContext, useEffect, useReducer } from 'react'

import reducer from '../reducers/movies_reducer'
// import {
// 	movies_url as url,
// 	search_movie_url as search_url,
// } from '../utils/constants'

const API_ENDPOINT = `https://api.themoviedb.org/3/`

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
	movie_id: '',
}

export const MoviesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	console.log(state.category)

	const setQuery = query => {
		dispatch({ type: 'SET_QUERY', payload: query })
	}

	const fetchMovies = async url => {
		dispatch({ type: 'GET_MOVIES_BEGIN' })
		try {
			const response = await fetch(url)
			let data = await response.json()

			let pages = data.total_pages

			if (pages > 500) {
				pages = 500
			}

			if (!state.movie_id) {
				data = data.results
			}

			dispatch({ type: 'GET_NUMBER_OF_PAGES', payload: pages })
			dispatch({ type: 'GET_MOVIES_SUCCESS', payload: data })
		} catch (error) {
			dispatch({ type: 'GET_MOVIES_ERROR' })
		}
	}

	useEffect(() => {
		if (state.movie_id) {
			fetchMovies(
				`${API_ENDPOINT}movie/${state.movie_id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
			)
			return
		}

		if (state.category === 'favorite' || state.category === 'watched') {
			getMoviesFromDB(state.category)
			return
		} else if (state.category) {
			fetchMovies(
				`${API_ENDPOINT}movie/${state.category}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${state.currentPage}`
			)
		}

		if (state.query) {
			fetchMovies(
				`${API_ENDPOINT}search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${state.query}&page=${state.currentPage}`
			)
			return
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.category, state.currentPage, state.query, state.movie_id])

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
