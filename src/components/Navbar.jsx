import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaRegHeart, FaPlus } from 'react-icons/fa'
import Search from './Search'

const Navbar = () => {
	return (
		<NavContainer>
			<ul>
				<li>
					<NavLink to='/favorite'>
						Films à voir <FaRegHeart />
					</NavLink>
				</li>
				<li>
					<NavLink to='/watched'>
						Films vus <FaPlus />
					</NavLink>
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
			a {
				color: #fff;
			}
		}

		a {
			color: #7378c5;
			text-decoration: none;
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
	}
`

export default Navbar
