import { useContext } from 'react'
import moviesContext from '../context/moviesContext'

function Movie({ movie }) {
	const { addMovieToFavorite, removeMovieFromFavorite, favoriteMovies } =
		useContext(moviesContext)

	function isFavorite(id) {
		if (favoriteMovies.some(item => item.id === id)) {
			return (
				<i
					className='fa-solid fa-heart'
					style={{ fontSize: '1rem', color: 'red' }}
					onClick={() => removeMovieFromFavorite(movie.id)}></i>
			)
		} else {
			return (
				<i
					className='fa-regular fa-heart'
					style={{ fontSize: '1rem' }}
					onClick={() => addMovieToFavorite(movie)}></i>
			)
		}
	}

	return (
		<div className='movie'>
			<img
				src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
				alt={movie.title}
			/>
			<span className='movie-add'>+</span>
			<span className='movie-favorite'>{isFavorite(movie.id)}</span>
			<div className='movie-info'>
				<h3>{movie.title}</h3>
				<div className='movie-spans'>
					<span>{movie.vote_average}</span>
					<span>{movie.release_date}</span>
				</div>
			</div>
			<div className='overview'>
				<h3>Overview</h3>
				<p>{movie.overview}</p>
			</div>
		</div>
	)
}

export default Movie
