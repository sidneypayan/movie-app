import { useEffect } from 'react'
import { useMoviesContext } from '../context/movies_context'
import { useParams } from 'react-router-dom'
import { Error, Movies, Filters, Pagination, Loader } from '../components'

const Home = () => {
	const { loading, error, dispatch } = useMoviesContext()
	let { category } = useParams()
	if (!category) {
		category = 'popular'
	}

	useEffect(() => {
		dispatch({ type: 'GET_CATEGORY', payload: category })
	}, [dispatch, category])

	if (loading) {
		return <Loader />
	}

	if (error) {
		return <Error />
	}

	return (
		<>
			<Filters />
			<Movies />
			{category !== 'favorite' && category !== 'watched' && <Pagination />}
		</>
	)
}

export default Home
