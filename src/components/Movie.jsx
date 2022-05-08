import { useContext } from 'react'
import moviesContext from '../context/moviesContext'
import moviePic from '../img/movie-pic.jpg'

function Movie({ movie }) {
	const {
		addMovieToFavorite,
		removeMovieFromFavorite,
		addMovieToWatched,
		removeMovieFromWatched,
		favoriteMovies,
		watchedMovies,
	} = useContext(moviesContext)

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

	function isWatched(id) {
		if (watchedMovies.some(item => item.id === id)) {
			return <div onClick={() => removeMovieFromWatched(movie.id)}>-</div>
		} else {
			return <div onClick={() => addMovieToWatched(movie)}>+</div>
		}
	}

	function imgExists() {
		if (movie.poster_path) {
			return (
				<img
					src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
					alt={movie.title}
				/>
			)
		} else {
			return (
				<div className='movie-no-img'>
					<h2>{movie.title}</h2>
				</div>
			)
		}
	}

	return (
		<div className='movie'>
			{imgExists()}
			<span className='movie-add'>{isWatched(movie.id)}</span>
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
