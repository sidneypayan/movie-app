import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'

import moviesContext from '../context/moviesContext'

function Header() {
	const { updtMovieName } = useContext(moviesContext)

	const [movieName, setMovieName] = useState('')

	function handleMovieSearch(e) {
		setMovieName(e.target.value)
		updtMovieName(e.target.value)
	}

	return (
		<header className='header'>
			<nav className='header__nav'>
				<ul>
					<li>
						<Link to='/films-a-voir'>
							{' '}
							Films à voir <i className='fa-regular fa-heart'></i>
						</Link>
					</li>
					<li>
						<Link to='/films-vus'>
							{' '}
							Films vus <i className='fa-solid fa-plus'></i>
						</Link>
					</li>
				</ul>
			</nav>

			<form className='search-form'>
				<input
					className='search-form__input'
					onChange={handleMovieSearch}
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
