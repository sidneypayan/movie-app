import { useContext } from 'react'
import moviesContext from '../context/moviesContext'

function useWatched() {
	const { watchedMovies, addMovieToWatched, removeMovieFromWatched } =
		useContext(moviesContext)

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
