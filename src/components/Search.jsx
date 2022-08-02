import { useEffect } from 'react'
import styled from 'styled-components'
import { useMoviesContext } from '../context/movies_context'

const Search = () => {
	const { dispatch, query, setQuery } = useMoviesContext()

	useEffect(() => {
		if (query) {
			dispatch({ type: 'SEARCHING_ON', payload: true })
		} else {
			dispatch({ type: 'SEARCHING_OFF', payload: false })
		}
	}, [dispatch, query])

	return (
		<SearchContainer>
			<form onSubmit={e => e.preventDefault()}>
				<input
					onChange={e => setQuery(e.target.value)}
					value={query}
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
