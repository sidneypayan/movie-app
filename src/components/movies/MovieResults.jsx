import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import MovieItem from './MovieItem'
import MoviesContext from '../../context/MoviesContext'

function MovieResults() {
	const { movies, favoriteMovies, watchedMovies } = useContext(MoviesContext)

	const location = useLocation()

	let moviesToDisplay = []
	if (location.pathname === '/') {
		moviesToDisplay = movies
	} else if (location.pathname === '/favorite') {
		moviesToDisplay = favoriteMovies
	} else if (location.pathname === '/watched') {
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
