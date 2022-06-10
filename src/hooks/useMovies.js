import { useContext, useEffect, useState } from 'react'
import MoviesContext from '../context/MoviesContext'

function useMovies() {
	const { favoriteMovies, watchedMovies, dispatch } = useContext(MoviesContext)
	const [count, setCount] = useState(0)

	const addMovieToLS = (movie, category) => {
		let dispatchCategory
		if (category === 'favorite') {
			dispatchCategory = 'ADD_MOVIE_TO_FAVORITE'
		} else {
			dispatchCategory = 'ADD_MOVIE_TO_WATCHED'
		}

		const movies = localStorage.getItem(category)
			? JSON.parse(localStorage.getItem(category))
			: []
		localStorage.setItem(category, JSON.stringify([...movies, movie]))

		dispatch({ type: dispatchCategory, payload: movie })
	}

	const deleteMovieFromLS = async (id, category) => {
		let dispatchCategory

		if (category === 'favorite') {
			dispatchCategory = 'DELETE_MOVIE_FROM_FAVORITE'
		}

		if (category === 'watched') {
			dispatchCategory = 'DELETE_MOVIE_FROM_WATCHED'
		}

		dispatch({ type: category, payload: id })
	}

	useEffect(() => {
		localStorage.setItem('favorite', JSON.stringify(favoriteMovies))
	}, [favoriteMovies])

	useEffect(() => {
		localStorage.setItem('watched', JSON.stringify(watchedMovies))
	}, [watchedMovies])

	return { addMovieToLS, deleteMovieFromLS }
}

export default useMovies
