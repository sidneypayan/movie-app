import { createContext, useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const moviesContext = createContext()

export function MoviesContextProvider({ children }) {
	const { getPopularMovies, getMovieByName } = useFetch()

	const [homePageMovies, setHomePageMovies] = useState([])
	const [favoriteMovies, setFavoriteMovies] = useState([])
	const [watchedMovies, setWatchedMovies] = useState([])

	function updtMovieName(input) {
		getMovieByName(input).then(res => setHomePageMovies(res))
	}

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
		// Delete movie from favorite after it was added to watched list
		removeMovieFromFavorite(movie.id)
	}

	function removeMovieFromWatched(id) {
		setWatchedMovies(prevFavorite =>
			prevFavorite.filter(item => item.id !== id)
		)
	}

	useEffect(() => {
		getPopularMovies().then(res => setHomePageMovies(res))
	}, [])

	return (
		<moviesContext.Provider
			value={{
				updtMovieName,
				addMovieToFavorite,
				removeMovieFromFavorite,
				addMovieToWatched,
				removeMovieFromWatched,
				homePageMovies,
				favoriteMovies,
				watchedMovies,
			}}>
			{children}
		</moviesContext.Provider>
	)
}

export default moviesContext
