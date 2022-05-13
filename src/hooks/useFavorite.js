import { useContext } from 'react'
import MoviesContext from '../context/MoviesContext'

import { addMovieToDB } from '../context/MoviesActions'

function useFavorite() {
	const { favoriteMovies, dispatch } = useContext(MoviesContext)

	const addMovieToFavorite = async movie => {
		const movieData = await addMovieToDB(movie, 'favorite')
		dispatch({ type: 'ADD_MOVIE_TO_FAVORITE', payload: movieData })
	}

	// const removeMovieFromFavorite = async id => {
	//   await removeMovieFromDB(id)
	// }

	function isFavorite(movie) {
		if (favoriteMovies.some(item => item.id === movie.id)) {
			return (
				<i
					className='fa-solid fa-heart'
					style={{ fontSize: '1rem', color: 'red' }}
					// onClick={() => removeMovie(movie.id, 'favorite')}
				></i>
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
