import { useContext } from 'react'

import moviesContext from '../context/moviesContext'

function FilmsVus() {
	const { removeMovieFromWatched, watchedMovies } = useContext(moviesContext)

	return watchedMovies.map(movie => (
		<div className='movie' key={movie.id}>
			<img
				src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
				alt={movie.title}
			/>
			<span className='movie-add'>
				<div onClick={() => removeMovieFromWatched(movie.id)}>-</div>
			</span>
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
	))
}

export default FilmsVus
