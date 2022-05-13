import { useContext } from 'react'
import MoviesContext from '../context/MoviesContext'

import { addMovieToDB, deleteMovieFromDB } from '../context/MoviesActions'

function useWatched() {
	const { watchedMovies, dispatch } = useContext(MoviesContext)

	const addMovieToWatched = async movie => {
		const movieData = await addMovieToDB(movie, 'watched')
		dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movieData })
	}

	const deleteMovieFromWatched = async id => {
		await deleteMovieFromDB(id, 'watched')
		dispatch({ type: 'DELETE_MOVIE_FROM_WATCHED', payload: id })
	}

	function isWatched(movie) {
		if (watchedMovies.some(item => item.id === movie.id)) {
			return <div onClick={() => deleteMovieFromWatched(movie.id)}>-</div>
		} else {
			return <div onClick={() => addMovieToWatched(movie)}>+</div>
		}
	}

	return { isWatched }
}

export default useWatched
