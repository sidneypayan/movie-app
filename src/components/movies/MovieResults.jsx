import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import MovieItem from './MovieItem'
import MoviesContext from '../../context/MoviesContext'

function MovieResults() {
	const { movies, popularMovies, favoriteMovies, watchedMovies } =
		useContext(MoviesContext)

	const location = useLocation()

	let moviesToDisplay = []

	if (location.pathname === '/' && movies.length > 0) {
		moviesToDisplay = movies
	}

	if (location.pathname === '/' && movies.length === 0) {
		moviesToDisplay = popularMovies
	}

	if (location.pathname === '/favorite') {
		moviesToDisplay = favoriteMovies
	}

	if (location.pathname === '/watched') {
		moviesToDisplay = watchedMovies
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
