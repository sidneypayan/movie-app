import { useMoviesContext } from '../context/movies_context'
import { Error, Movies, Filters, Pagination, Loader } from '../components'

const Home = () => {
	const { loading, error } = useMoviesContext()

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
