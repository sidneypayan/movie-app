import { useContext } from 'react'
import MoviesContext from '../context/MoviesContext'

function useWatched() {
	const { favoriteMovies, watchedMovies, dispatch } = useContext(MoviesContext)

	const addMovieToWatched = movie => {
		// Lorsque user ajoute film à liste watched, check si film présent dans liste favoris et le supprime si true
		if (favoriteMovies.some(item => item.id === movie.id)) {
			dispatch({ type: 'DELETE_MOVIE_FROM_FAVORITE', payload: movie.id })
		}

		dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie })
	}

	const deleteMovieFromWatched = id => {
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
