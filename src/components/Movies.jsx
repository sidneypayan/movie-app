import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

import Movie from './Movie'

function Movies() {
	const [trendingMovies, setTrendingMovies] = useState([])
	const { getTrendingMovies } = useFetch()

	useEffect(() => {
		getTrendingMovies().then(res => setTrendingMovies(res))
	}, [])

	return trendingMovies.map(movie => <Movie key={movie.id} movie={movie} />)
}

export default Movies
