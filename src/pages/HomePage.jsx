import { useMoviesContext } from '../context/movies_context'
import { Loading, Error, Movies } from '../components'

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
			<Movies />
		</>
	)
}

export default Home
