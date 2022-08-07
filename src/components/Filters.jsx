import { useMoviesContext } from '../context/movies_context'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Filters = () => {
	const { dispatch } = useMoviesContext()

	return (
		<Wrapper>
			<ul>
				<li>
					<NavLink
						to='/popular'
						onClick={() => dispatch({ type: 'SET_QUERY', payload: '' })}>
						Films populaires
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/now_playing'
						onClick={() => dispatch({ type: 'SET_QUERY', payload: '' })}>
						Films à l'affiche
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/upcoming'
						onClick={() => dispatch({ type: 'SET_QUERY', payload: '' })}>
						Films à venir
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/top_rated'
						onClick={() => dispatch({ type: 'SET_QUERY', payload: '' })}>
						Les mieux notés
					</NavLink>
				</li>
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.nav`
	ul {
		display: flex;
		margin: 2rem;
		flex-wrap: wrap;
	}

	li {
		border: 2px solid #22254b;
		padding: 0.25rem 0.5rem;
		margin-right: 0.5rem;
		border-radius: 50px;
		cursor: pointer;

		&:hover {
			background-color: #22254b;
		}

		a {
			color: #7378c5;
			text-decoration: none;
		}
	}

	.active {
		border-bottom: 2px solid #7378c5;
	}

	@media (max-width: 767px) {
		ul {
			justify-content: space-between;
			margin: 2rem 0;
		}

		li {
			width: 45%;
		}
	}
`

export default Filters
