import { useState } from 'react'
import styled from 'styled-components'
import { useMoviesContext } from '../context/movies_context'

const Search = () => {
	const { searchMovie } = useMoviesContext()
	const [movieName, setMovieName] = useState()

	const handleChange = e => {
		setMovieName(e.target.value)
		searchMovie(e.target.value)
	}

	return (
		<SearchContainer>
			<form>
				<input
					onChange={handleChange}
					value={movieName}
					type='text'
					placeholder='chercher un film'
				/>
			</form>
		</SearchContainer>
	)
}

const SearchContainer = styled.div`
	input {
		background-color: transparent;
		border: 2px solid #22254b;
		border-radius: 50px;
		font-family: inherit;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		color: #fff;

		&::placeholder {
			color: #7378c5;
		}

		&:focus {
			outline: none;
			background-color: #22254b;
		}
	}
`

export default Search
