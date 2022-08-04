import { useEffect } from 'react'
import { useMoviesContext } from '../context/movies_context'
import { useParams } from 'react-router-dom'
import { Error, Movies, Filters, Pagination, Loader } from '../components'

const Home = () => {
	const { loading, error, dispatch } = useMoviesContext()
	const { category } = useParams()

	console.log(category)

	useEffect(() => {
		// if (category) {
		dispatch({ type: 'GET_CATEGORY', payload: category })
		// } else {
		// 	dispatch({ type: 'GET_CATEGORY', payload: 'popular' })
		// }
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
			<Pagination />
		</>
	)
}

export default Home
