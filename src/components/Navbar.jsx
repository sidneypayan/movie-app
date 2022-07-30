import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaRegHeart } from 'react-icons/fa'
import Search from './Search'

const Navbar = () => {
	return (
		<NavContainer>
			<ul>
				<li>
					<Link to='/favorite'>
						Films à voir <FaRegHeart />
					</Link>
				</li>
				<li>
					<Link to='/watched'>Films vus +</Link>
				</li>
			</ul>
			<Search />
		</NavContainer>
	)
}

const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #373b69;
	color: #fff;
	padding: 1rem 2.5rem;

	ul {
		display: flex;
		margin: 0.5rem;
	}

	li {
		border: 2px solid #22254b;
		padding: 0.25rem 0.5rem;
		margin-right: 1rem;
		border-radius: 50px;
		cursor: pointer;

		&:hover {
			background-color: #22254b;
		}

		a {
			color: #7378c5;
			text-decoration: none;

			&:hover {
				color: #fff;
			}
		}
	}
`

export default Navbar
