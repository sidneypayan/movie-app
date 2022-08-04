import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Filters = () => {
	return (
		<FilterContainer>
			<ul>
				<li>
					<NavLink to='/popular'>Films populaires</NavLink>
				</li>
				<li>
					<NavLink to='/now_playing'>Films à l'affiche</NavLink>
				</li>
				<li>
					<NavLink to='/upcoming'>Films à venir</NavLink>
				</li>
				<li>
					<NavLink to='/top_rated'>Films les mieux notés</NavLink>
				</li>
			</ul>
		</FilterContainer>
	)
}

const FilterContainer = styled.nav`
	ul {
		display: flex;
		margin: 2rem;
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
`

export default Filters
