import { useContext } from 'react'

import MoviesContext from '../context/MoviesContext'
import Movie from './Movie'

function Movies() {
	const { apiMovies, favoriteMovies, watchedMovies, menuSection } =
		useContext(MoviesContext)

	function movieSection() {
		if (menuSection === 'favorite') {
			return favoriteMovies.map(movie => <Movie key={movie.id} movie={movie} />)
		} else if (menuSection === 'watched') {
			return watchedMovies.map(movie => <Movie key={movie.id} movie={movie} />)
		} else {
			return apiMovies.map(movie => <Movie key={movie.id} movie={movie} />)
		}
	}

	return movieSection()
}

export default Movies
