import { useContext } from 'react'
import MoviesContext from '../context/MoviesContext'

function useWatched() {
	const { watchedMovies, addMovieToWatched, removeMovieFromWatched } =
		useContext(MoviesContext)

	function isWatched(movie) {
		if (watchedMovies.some(item => item.id === movie.id)) {
			return <div onClick={() => removeMovieFromWatched(movie.id)}>-</div>
		} else {
			return <div onClick={() => addMovieToWatched(movie)}>+</div>
		}
	}

	return { isWatched }
}

export default useWatched
