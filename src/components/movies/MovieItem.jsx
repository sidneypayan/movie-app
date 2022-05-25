import useFavorite from '../../hooks/useFavorite'
import useImgExists from '../../hooks/useImgExists'
import useWatched from '../../hooks/useWatched'

function MovieItem({ movie }) {
	const { isFavorite } = useFavorite()
	const { isWatched } = useWatched()
	const { imgExists } = useImgExists()

	const { title, vote_average, release_date, overview } = movie

	return (
		<div className='movie'>
			{imgExists(movie)}
			<span className='movie-add'>{isWatched(movie)}</span>
			{isFavorite(movie)}
			<div className='movie-info'>
				<h3>{title}</h3>
				<div className='movie-spans'>
					<span>{vote_average}</span>
					<span>{release_date}</span>
				</div>
			</div>
			<div className='overview'>
				<h3>Overview</h3>
				<p>{overview}</p>
			</div>
		</div>
	)
}

export default MovieItem
