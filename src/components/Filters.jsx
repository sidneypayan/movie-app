import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Filters = () => {
	const { category } = useParams()

	useEffect(() => {
		console.log(category)
	}, [category])

	return (
		<FilterContainer>
			<ul>
				<li>
					<Link
						to='/popular'
						className={({ isActive }) => (isActive ? 'active' : '')}>
						Films populaires
					</Link>
				</li>
				<li>
					<Link to='/now-playing'>Films à l'affiche</Link>
				</li>
				<li>
					<Link to='/upcoming'>Films à venir</Link>
				</li>
				<li>
					<Link to='/top-rated'>Films les mieux notés</Link>
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
`

export default Filters
