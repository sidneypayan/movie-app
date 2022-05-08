import useFavorite from '../hooks/useFavorite'
import useImgExists from '../hooks/useImgExists'
import useWatched from '../hooks/useWatched'

function Movie({ movie }) {
	const { isFavorite } = useFavorite()
	const { isWatched } = useWatched()
	const { imgExists } = useImgExists()

	return (
		<div className='movie'>
			{imgExists(movie)}
			<span className='movie-add'>{isWatched(movie)}</span>
			<span className='movie-favorite'>{isFavorite(movie)}</span>
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
