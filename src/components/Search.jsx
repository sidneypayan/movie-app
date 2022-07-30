import styled from 'styled-components'

const Search = () => {
	return (
		<SearchContainer>
			<form>
				<input type='text' placeholder='chercher un film' />
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
