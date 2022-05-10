import { createContext, useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const MoviesContext = createContext()

export function MoviesContextProvider({ children }) {
	const {
		getPopularMovies,
		getMovieByName,
		getFavoriteMovies,
		getWatchedMovies,
	} = useFetch()

	const [menuSection, setMenuSection] = useState('')
	const [apiMovies, setApiMovies] = useState([])
	const [favoriteMovies, setFavoriteMovies] = useState([])
	const [watchedMovies, setWatchedMovies] = useState([])

	function updtMovieName(input) {
		getMovieByName(input).then(res => setApiMovies(res))
	}

	async function addMovieToFavorite(movie) {
		const res = await fetch('/favorite', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(movie),
		})
		const data = await res.json()
		setFavoriteMovies(prevFavorite => [...prevFavorite, data])
	}

	async function removeMovieFromFavorite(id) {
		await fetch(`/favorite/${id}`, {
			method: 'DELETE',
		})
		setFavoriteMovies(prevFavorite =>
			prevFavorite.filter(item => item.id !== id)
		)
	}

	async function addMovieToWatched(movie) {
		const res = await fetch('/watched', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(movie),
		})
		const data = await res.json()
		setWatchedMovies(prevFavorite => [...prevFavorite, data])
		// Delete movie from favorite after it was added to watched list
		removeMovieFromFavorite(movie.id)
	}

	async function removeMovieFromWatched(id) {
		await fetch(`/watched/${id}`, {
			method: 'DELETE',
		})
		setWatchedMovies(prevFavorite =>
			prevFavorite.filter(item => item.id !== id)
		)
	}

	function setMenuSectionToFavorite() {
		setMenuSection('favorite')
	}

	function setMenuSectionToWatched() {
		setMenuSection('watched')
	}

	useEffect(() => {
		getPopularMovies().then(res => setApiMovies(res))
		getFavoriteMovies().then(res => setFavoriteMovies(res))
		getWatchedMovies().then(res => setWatchedMovies(res))
	}, [])

	return (
		<MoviesContext.Provider
			value={{
				updtMovieName,
				addMovieToFavorite,
				removeMovieFromFavorite,
				addMovieToWatched,
				removeMovieFromWatched,
				setMenuSectionToFavorite,
				setMenuSectionToWatched,
				apiMovies,
				favoriteMovies,
				watchedMovies,
				menuSection,
			}}>
			{children}
		</MoviesContext.Provider>
	)
}

export default MoviesContext
