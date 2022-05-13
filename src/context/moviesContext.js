import { createContext, useReducer } from 'react'
import moviesReducer from './MoviesReducer'

const MoviesContext = createContext()

export const MoviesProvider = ({ children }) => {
	const initialState = {
		movies: [],
		popularMovies: [],
		favoriteMovies: [],
		watchedMovies: [],
	}

	const [state, dispatch] = useReducer(moviesReducer, initialState)

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
