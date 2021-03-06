import { useContext } from 'react'
import MoviesContext from '../context/MoviesContext'

function useFavorite() {
	const { watchedMovies, favoriteMovies, dispatch } = useContext(MoviesContext)

	const addMovieToFavorite = movie => {
		// const movieData = await addMovieToDB(movie, 'favorite')
		dispatch({ type: 'ADD_MOVIE_TO_FAVORITE', payload: movie })
	}

	const deleteMovieFromFavorite = id => {
		dispatch({ type: 'DELETE_MOVIE_FROM_FAVORITE', payload: id })
	}

	function isFavorite(movie) {
		// Si film déju vu ne pas display icône 'à voir'
		if (watchedMovies.some(item => item.id === movie.id)) {
			return ''
		}

		if (favoriteMovies.some(item => item.id === movie.id)) {
			return (
				<span className='movie-favorite'>
					<i
						className='fa-solid fa-heart'
						style={{ fontSize: '1rem', color: 'red' }}
						onClick={() => deleteMovieFromFavorite(movie.id)}></i>
				</span>
			)
		} else {
			return (
				<span className='movie-favorite'>
					<i
						className='fa-regular fa-heart'
						style={{ fontSize: '1rem' }}
						onClick={() => addMovieToFavorite(movie)}></i>
				</span>
			)
		}
	}

	return { isFavorite }
}

export default useFavorite
