import { useContext, useEffect } from 'react'
import MoviesContext from '../../context/MoviesContext'
import MovieResults from '../movies/MovieResults'
import { getPopularMovies } from '../../context/MoviesActions'
import { getNowPlayingMovies } from '../../context/MoviesActions'
import { getUpcommingMovies } from '../../context/MoviesActions'
import { getTopRatedMovies } from '../../context/MoviesActions'
import { getMoviesFromDB } from '../../context/MoviesActions'

function Home() {
	const { dispatch } = useContext(MoviesContext)

	useEffect(() => {
		const getPopularMoviesData = async () => {
			const moviesData = await getPopularMovies()
			dispatch({ type: 'GET_POPULAR_MOVIES', payload: moviesData })
		}
		getPopularMoviesData()
	}, [dispatch])

	useEffect(() => {
		const getNowPlayingMoviesData = async () => {
			const moviesData = await getNowPlayingMovies()
			dispatch({ type: 'GET_NOW_PLAYING_MOVIES', payload: moviesData })
		}
		getNowPlayingMoviesData()
	}, [dispatch])

	useEffect(() => {
		const getUpcommingMoviesData = async () => {
			const moviesData = await getUpcommingMovies()
			dispatch({ type: 'GET_UPCOMING_MOVIES', payload: moviesData })
		}
		getUpcommingMoviesData()
	}, [dispatch])

	useEffect(() => {
		const getTopRatedMoviesData = async () => {
			const moviesData = await getTopRatedMovies()
			dispatch({ type: 'GET_TOP_RATED_MOVIES', payload: moviesData })
		}
		getTopRatedMoviesData()
	}, [dispatch])

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

	return (
		<>
			<MovieResults />
		</>
	)
}

export default Home
