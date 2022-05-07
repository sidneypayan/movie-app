import { createContext, useState } from 'react'

const moviesContext = createContext()

export function MoviesContextProvider({ children }) {
	const [favoriteMovies, setFavoriteMovies] = useState([])

	function addMovieToFavorite(movie) {
		setFavoriteMovies(prevFavorite => [...prevFavorite, movie])
	}

	function removeMovieFromFavorite(id) {
		setFavoriteMovies(prevFavorite =>
			prevFavorite.filter(item => item.id !== id)
		)
	}

	return (
		<moviesContext.Provider
			value={{ addMovieToFavorite, removeMovieFromFavorite, favoriteMovies }}>
			{children}
		</moviesContext.Provider>
	)
}

export default moviesContext
