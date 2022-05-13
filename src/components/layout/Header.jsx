import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import MoviesContext from '../../context/MoviesContext'
import { searchMovies } from '../../context/MoviesActions'

function Header() {
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
						<Link to='/'>Films populaires</Link>
					</li>
					<li>
						<Link to='/favorite'>
							Films à voir <i className='fa-regular fa-heart'></i>
						</Link>
					</li>
					<li>
						<Link to='/watched'>
							Films vus <i className='fa-solid fa-plus'></i>
						</Link>
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
