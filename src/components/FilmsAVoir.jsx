import { useContext } from 'react'
import moviesContext from '../context/moviesContext'

function FilmsAVoir() {
	const { favoriteMovies, removeMovieFromFavorite, addMovieToWatched } =
		useContext(moviesContext)

	return favoriteMovies.map(movie => (
		<div className='movie' key={movie.id}>
			<img
				src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
				alt={movie.title}
			/>
			<span className='movie-add'>
				<div onClick={() => addMovieToWatched(movie)}>+</div>
			</span>
			<span className='movie-favorite'>
				{' '}
				<i
					className='fa-solid fa-heart'
					style={{ fontSize: '1rem', color: 'red' }}
					onClick={() => removeMovieFromFavorite(movie.id)}></i>
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

export default FilmsAVoir
