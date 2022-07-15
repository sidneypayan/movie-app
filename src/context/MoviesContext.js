import { useEffect } from 'react'
import { createContext, useReducer } from 'react'
import MoviesReducer from './MoviesReducer'

const MoviesContext = createContext()

export const MoviesProvider = ({ children }) => {
	const initialState = {
		movies: [],
		favoriteMovies: JSON.parse(localStorage.getItem('favorite')) || [],
		watchedMovies: JSON.parse(localStorage.getItem('watched')) || [],
	}

	const [state, dispatch] = useReducer(MoviesReducer, initialState)

	useEffect(() => {
		localStorage.setItem('favorite', JSON.stringify(state.favoriteMovies))
	}, [state.favoriteMovies])

	useEffect(() => {
		localStorage.setItem('watched', JSON.stringify(state.watchedMovies))
	}, [state.watchedMovies])

	return (
		<MoviesContext.Provider
			value={{
				...state,
				dispatch,
			}}>
			{children}
		</MoviesContext.Provider>
	)
}

export default MoviesContext
