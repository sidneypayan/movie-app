import { useContext } from 'react'

import moviesContext from '../context/moviesContext'
import Movie from './Movie'

function Movies() {
	const { homePageMovies } = useContext(moviesContext)

	return homePageMovies.map(movie => <Movie key={movie.id} movie={movie} />)
}

export default Movies
