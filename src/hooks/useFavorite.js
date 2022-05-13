import { useContext } from 'react'
import MoviesContext from '../context/MoviesContext'

import { addMovieToDB, deleteMovieFromDB } from '../context/MoviesActions'

function useFavorite() {
	const { favoriteMovies, dispatch } = useContext(MoviesContext)

	const addMovieToFavorite = async movie => {
		const movieData = await addMovieToDB(movie, 'favorite')
		dispatch({ type: 'ADD_MOVIE_TO_FAVORITE', payload: movieData })
	}

	const deleteMovieFromFavorite = async id => {
		await deleteMovieFromDB(id, 'favorite')
		dispatch({ type: 'DELETE_MOVIE_FROM_FAVORITE', payload: id })
	}

	function isFavorite(movie) {
		if (favoriteMovies.some(item => item.id === movie.id)) {
			return (
				<i
					className='fa-solid fa-heart'
					style={{ fontSize: '1rem', color: 'red' }}
					onClick={() => deleteMovieFromFavorite(movie.id)}></i>
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
