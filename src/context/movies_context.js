import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/movies_reducer'

const initialState = {
	loading: false,
	error: false,
	movies: [],
}

const MoviesContext = React.createContext()

export const MoviesProvider = ({ children }) => {
	return <MoviesContext.Provider value={{}}>{children}</MoviesContext.Provider>
}

export const useMoviesContext = () => {
	return useContext(MoviesContext)
}
