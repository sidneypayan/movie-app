import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import MovieItem from './MovieItem'
import MoviesContext from '../../context/MoviesContext'

function MovieResults() {
	const {
		movies,
		popularMovies,
		nowPlayingMovies,
		upcomingMovies,
		topRatedMovies,
		favoriteMovies,
		watchedMovies,
	} = useContext(MoviesContext)

	const location = useLocation()

	let moviesToDisplay = []

	if (movies.length) {
		moviesToDisplay = movies
	} else {
		switch (location.pathname) {
			case '/':
			case '/popular':
				moviesToDisplay = popularMovies
				break
			case '/now-playing':
				moviesToDisplay = nowPlayingMovies
				break
			case '/upcoming':
				moviesToDisplay = upcomingMovies
				break
			case '/top-rated':
				moviesToDisplay = topRatedMovies
				break
			case '/favorite':
				moviesToDisplay = favoriteMovies
				break
			case '/watched':
				moviesToDisplay = watchedMovies
				break
			default:
				console.log('Pas de page avec cet url')
		}
	}

	// if (location.pathname === '/' && movies.length > 0) {
	// 	moviesToDisplay = movies
	// }

	// if (location.pathname === '/popular' && movies.length === 0) {
	// 	moviesToDisplay = popularMovies
	// }

	// if (location.pathname === '/now-playing' && movies.length === 0) {
	// 	moviesToDisplay = nowPlayingMovies
	// }

	// if (location.pathname === '/upcoming' && movies.length === 0) {
	// 	moviesToDisplay = upcomingMovies
	// }

	// if (location.pathname === '/top-rated' && movies.length === 0) {
	// 	moviesToDisplay = topRatedMovies
	// }

	// if (location.pathname === '/favorite') {
	// 	moviesToDisplay = favoriteMovies
	// }

	// if (location.pathname === '/watched') {
	// 	moviesToDisplay = watchedMovies
	// }

	return (
		<>
			{moviesToDisplay.map(movie => (
				<MovieItem key={movie.id} movie={movie} />
			))}
		</>
	)
}

export default MovieResults
