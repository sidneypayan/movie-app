import { useContext, useEffect } from 'react'
import MoviesContext from '../../context/MoviesContext'
import MovieResults from '../movies/MovieResults'
import { getPopularMovies } from '../../context/MoviesActions'
import { getMoviesFromDB } from '../../context/MoviesActions'

function Home() {
	const { dispatch } = useContext(MoviesContext)

	useEffect(() => {
		const getFavoriteMovies = async () => {
			const favoriteMovies = await getMoviesFromDB('favorite')
			dispatch({ type: 'GET_FAVORITE_MOVIES', payload: favoriteMovies })
		}
		getFavoriteMovies()
	}, [dispatch])

	useEffect(() => {
		const getWatchedMovies = async () => {
			const watchedMovies = await getMoviesFromDB('watched')
			dispatch({ type: 'GET_WATCHED_MOVIES', payload: watchedMovies })
		}
		getWatchedMovies()
	}, [dispatch])

	useEffect(() => {
		const getMoviesData = async () => {
			const moviesData = await getPopularMovies()
			dispatch({ type: 'GET_MOVIES', payload: moviesData })
		}
		getMoviesData()
	}, [dispatch])

	return (
		<>
			<MovieResults />
		</>
	)
}

export default Home
