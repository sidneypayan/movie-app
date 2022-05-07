import { createContext, useState } from 'react'

const moviesContext = createContext()

export function MoviesContextProvider({ children }) {
	const [favoriteMovies, setFavoriteMovies] = useState([])
	const [watchedMovies, setWatchedMovies] = useState([])

	function addMovieToFavorite(movie) {
		setFavoriteMovies(prevFavorite => [...prevFavorite, movie])
	}

	function removeMovieFromFavorite(id) {
		setFavoriteMovies(prevFavorite =>
			prevFavorite.filter(item => item.id !== id)
		)
	}

	function addMovieToWatched(movie) {
		setWatchedMovies(prevFavorite => [...prevFavorite, movie])
	}

	function removeMovieFromWatched(id) {
		setWatchedMovies(prevFavorite =>
			prevFavorite.filter(item => item.id !== id)
		)
	}

	return (
		<moviesContext.Provider
			value={{
				addMovieToFavorite,
				removeMovieFromFavorite,
				addMovieToWatched,
				removeMovieFromWatched,
				favoriteMovies,
				watchedMovies,
			}}>
			{children}
		</moviesContext.Provider>
	)
}

export default moviesContext
