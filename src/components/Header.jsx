import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

function Header() {
	const { getMovie } = useFetch()

	const [movieName, setMovieName] = useState('')
	const [movies, setMovies] = useState([])

	function handleMovieSearch(e) {
		setMovieName(e.target.value)
	}

	useEffect(() => {
		if (movieName) {
			setMovies(getMovie(movieName))
		}
	}, [movieName])

	return (
		<header className='header'>
			<h2 className='header__title'>Movie App</h2>
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
