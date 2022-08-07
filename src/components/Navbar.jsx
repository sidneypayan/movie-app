import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaRegHeart, FaPlus } from 'react-icons/fa'
import Search from './Search'

const Navbar = () => {
	return (
		<Wrapper>
			<ul>
				<li>
					<NavLink to='/favorite'>
						<span className='nav-link'>Films à voir</span> <FaRegHeart />
					</NavLink>
				</li>
				<li>
					<NavLink to='/watched'>
						<span className='nav-link'>Films vus</span> <FaPlus />
					</NavLink>
				</li>
			</ul>
			<Search />
		</Wrapper>
	)
}

const Wrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #373b69;
	color: #fff;
	padding: 0.75rem 1.5rem;

	@media (max-width: 767px) {
		padding: 0.25rem 0.75rem;
	}

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

	@media (max-width: 767px) {
		.nav-link {
			display: none;
		}

		li {
			padding: 0.5rem 0.75rem;
		}
	}
`

export default Navbar
