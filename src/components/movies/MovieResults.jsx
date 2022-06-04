import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import MovieItem from './MovieItem'
import MoviesContext from '../../context/MoviesContext'

function MovieResults() {
	const { movies, favoriteMovies, watchedMovies } = useContext(MoviesContext)

	const location = useLocation()

	let moviesToDisplay = movies

	if (favoriteMovies.length > 0 && location.pathname === '/favorite') {
		moviesToDisplay = favoriteMovies
	}

	if (!favoriteMovies.length && location.pathname === '/favorite') {
		moviesToDisplay = []
	}

	if (watchedMovies.length > 0 && location.pathname === '/watched') {
		moviesToDisplay = watchedMovies
	}

	if (!watchedMovies.length && location.pathname === '/watched') {
		moviesToDisplay = []
	}

	return (
		<>
			{moviesToDisplay.map(movie => (
				<MovieItem key={movie.id} movie={movie} />
			))}
		</>
	)
}

export default MovieResults
