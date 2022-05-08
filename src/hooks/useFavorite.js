import { useContext } from 'react'
import moviesContext from '../context/moviesContext'

function useFavorite() {
	const { favoriteMovies, addMovieToFavorite, removeMovieFromFavorite } =
		useContext(moviesContext)

	function isFavorite(movie) {
		if (favoriteMovies.some(item => item.id === movie.id)) {
			return (
				<i
					className='fa-solid fa-heart'
					style={{ fontSize: '1rem', color: 'red' }}
					onClick={() => removeMovieFromFavorite(movie.id)}></i>
			)
		} else {
			return (
				<i
					className='fa-regular fa-heart'
					style={{ fontSize: '1rem' }}
					onClick={() => addMovieToFavorite(movie)}></i>
			)
		}
	}

	return { isFavorite }
}

export default useFavorite
