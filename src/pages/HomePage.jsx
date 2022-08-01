import { useMoviesContext } from '../context/movies_context'
import { Loading, Error, Movies, Filters, Pagination } from '../components'

const Home = () => {
	const { loading, error } = useMoviesContext()

	if (loading) {
		return <Loading />
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
