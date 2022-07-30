import { useMoviesContext } from '../context/movies_context'
import MovieCard from './MovieCard'
import styled from 'styled-components'

const Movies = () => {
	const { movies } = useMoviesContext()

	return (
		<MoviesContainer>
			{movies.map(movie => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</MoviesContainer>
	)
}

const MoviesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`

export default Movies
