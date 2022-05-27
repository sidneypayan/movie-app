import { NavLink } from 'react-router-dom'
import useEmptyMoviesArray from '../../hooks/useEmptyMoviesArray'

function Filter() {
	const [emptyMoviesArray] = useEmptyMoviesArray()

	return (
		<nav className='filter__nav'>
			<ul>
				<li>
					<NavLink
						onClick={emptyMoviesArray}
						to='/popular'
						className={({ isActive }) => (isActive ? 'active' : '')}>
						Films populaires
					</NavLink>
				</li>
				<li>
					<NavLink
						onClick={emptyMoviesArray}
						to='/now-playing'
						className={({ isActive }) => (isActive ? 'active' : '')}>
						Films à l'affiche
					</NavLink>
				</li>
				<li>
					<NavLink
						onClick={emptyMoviesArray}
						to='/upcoming'
						className={({ isActive }) => (isActive ? 'active' : '')}>
						Films à venir
					</NavLink>
				</li>
				<li>
					<NavLink
						onClick={emptyMoviesArray}
						to='/top-rated'
						className={({ isActive }) => (isActive ? 'active' : '')}>
						Films les mieux notés
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Filter
