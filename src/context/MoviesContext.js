import { createContext, useReducer } from 'react'
import MoviesReducer from './MoviesReducer'

const MoviesContext = createContext()

export const MoviesProvider = ({ children }) => {
	const initialState = {
		movies: [],
		popularMovies: [],
		nowPlayingMovies: [],
		upcomingMovies: [],
		topRatedMovies: [],
		favoriteMovies: [],
		watchedMovies: [],
	}

	const [state, dispatch] = useReducer(MoviesReducer, initialState)

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
