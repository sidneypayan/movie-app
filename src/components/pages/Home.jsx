import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getMovies } from '../../context/MoviesActions'
import MoviesContext from '../../context/MoviesContext'
import MovieResults from '../movies/MovieResults'

function Home() {
	const { dispatch } = useContext(MoviesContext)
	const location = useLocation()

	useEffect(() => {
		const getMoviesData = async category => {
			const moviesData = await getMovies(category)
			dispatch({ type: 'GET_MOVIES', payload: moviesData })
		}

		switch (location.pathname) {
			case '/':
			case '/popular':
				getMoviesData('popular')
				break
			case '/now-playing':
				getMoviesData('now_playing')
				break
			case '/upcoming':
				getMoviesData('upcoming')
				break
			case '/top-rated':
				getMoviesData('top_rated')
				break
			case '/favorite':
				break
			case '/watched':
				break
			default:
				console.log("Cette page n'existe pas")
		}
	}, [dispatch, location.pathname])

	// useEffect(() => {
	// 	const getFavoriteMoviesFromDB = async () => {
	// 		const moviesData = await getMoviesFromDB('favorite')
	// 		dispatch({ type: 'GET_FAVORITE_MOVIES', payload: moviesData })
	// 	}
	// 	getFavoriteMoviesFromDB()
	// }, [dispatch])

	// useEffect(() => {
	// 	const getWatchedMoviesFromDB = async () => {
	// 		const moviesData = await getMoviesFromDB('watched')
	// 		dispatch({ type: 'GET_WATCHED_MOVIES', payload: moviesData })
	// 	}
	// 	getWatchedMoviesFromDB()
	// }, [dispatch])

	return (
		<>
			<MovieResults />
		</>
	)
}

export default Home
