import { NavLink } from 'react-router-dom'
import { useState, useContext } from 'react'
import MoviesContext from '../../context/MoviesContext'
import { searchMovies } from '../../context/MoviesActions'
import useEmptyMoviesArray from '../../hooks/useEmptyMoviesArray'

function Header() {
	const [emptyMoviesArray] = useEmptyMoviesArray()
	const [movieName, setMovieName] = useState('')

	const { dispatch } = useContext(MoviesContext)

	const handleChange = e => {
		setMovieName(e.target.value)
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const movies = await searchMovies(movieName)
		dispatch({ type: 'GET_MOVIES', payload: movies })

		setMovieName('')
	}

	return (
		<header className='header'>
			<nav className='header__nav'>
				<ul>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? 'header-active' : '')}
							onClick={emptyMoviesArray}
							to='/favorite'>
							Films à voir <i className='fa-regular fa-heart'></i>
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? 'header-active' : '')}
							onClick={emptyMoviesArray}
							to='/watched'>
							Films vus <i className='fa-solid fa-plus'></i>
						</NavLink>
					</li>
				</ul>
			</nav>

			<form className='search-form' onSubmit={handleSubmit}>
				<input
					className='search-form__input'
					onChange={handleChange}
					type='text'
					name='movie'
					id='movie'
					value={movieName}
					placeholder='search for movie'
				/>
			</form>
		</header>
	)
}

export default Header
