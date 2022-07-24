import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getMovies } from '../../context/MoviesActions'
import MoviesContext from '../../context/MoviesContext'
import MovieResults from '../movies/MovieResults'

function Home() {
	const [page, setPage] = useState(1)
	const [category, setCategory] = useState('')
	const [loading, setLoading] = useState(false)
	const { dispatch, movies } = useContext(MoviesContext)
	const location = useLocation()

	console.log(loading)

	console.log(page)

	useEffect(() => {
		const getMoviesData = async category => {
			setLoading(true)
			const moviesData = await getMovies(category)
			dispatch({ type: 'GET_MOVIES', payload: moviesData })
		}

		switch (location.pathname) {
			case '/':
			case '/popular':
				getMoviesData('popular')
				setCategory('popular')
				break
			case '/now-playing':
				getMoviesData('now_playing')
				setCategory('now_playing')
				break
			case '/upcoming':
				getMoviesData('upcoming')
				setCategory('upcoming')
				break
			case '/top-rated':
				getMoviesData('top_rated')
				setCategory('top_rated')
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
	// 	getMovies(category)
	// 	dispatch({ type: 'GET_MOVIES', payload: moviesData })
	// }, [page])

	useEffect(() => {
		const event = window.addEventListener('scroll', () => {
			if (
				!loading &&
				window.innerHeight + window.scrollY >= document.body.scrollHeight
			) {
				setPage(oldPage => oldPage + 1)
			}
		})

		return () => window.removeEventListener('scroll', event)
	}, [])

	return (
		<>
			<MovieResults />
		</>
	)
}

export default Home
