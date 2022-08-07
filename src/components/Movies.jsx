import { useMoviesContext } from '../context/movies_context'
import MovieCard from './MovieCard'
import styled from 'styled-components'

const Movies = () => {
	const { movies } = useMoviesContext()

	return (
		<Wrapper className='container'>
			{movies.map(movie => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	gap: 2rem;

	@media (max-width: 767px) {
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
	}
`

export default Movies
