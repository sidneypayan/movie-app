// import { useContext } from 'react'
// import MoviesContext from '../../context/MoviesContext'
// import { getMovies } from '../../context/MoviesActions'
import { NavLink } from 'react-router-dom'

function Filter() {
	// const { dispatch } = useContext(MoviesContext)

	// const addMoviesToReducer = async category => {
	// 	const movies = await getMovies(category)
	// 	dispatch({ type: 'GET_MOVIES', payload: movies })
	// }

	return (
		<nav className='filter__nav'>
			<ul>
				<li>
					<NavLink
						// onClick={() => addMoviesToReducer('popular')}
						to='/popular'
						className={({ isActive }) => (isActive ? 'active' : '')}>
						Films populaires
					</NavLink>
				</li>
				<li>
					<NavLink
						// onClick={() => addMoviesToReducer('now_playing')}
						to='/now-playing'
						className={({ isActive }) => (isActive ? 'active' : '')}>
						Films à l'affiche
					</NavLink>
				</li>
				<li>
					<NavLink
						// onClick={() => addMoviesToReducer('upcoming')}
						to='/upcoming'
						className={({ isActive }) => (isActive ? 'active' : '')}>
						Films à venir
					</NavLink>
				</li>
				<li>
					<NavLink
						// onClick={() => addMoviesToReducer('top_rated')}
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
