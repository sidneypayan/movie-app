import styled from 'styled-components'
import { FaRegHeart, FaHeart, FaPlus, FaMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useMoviesContext } from '../context/movies_context'

const MovieCard = ({ movie }) => {
	const { addMovieToDB, removeMovieFromDB, favoriteMovies, watchedMovies } =
		useMoviesContext()

	const { id, original_title, poster_path, vote_average, release_date } = movie

	const date = new Date(release_date).toLocaleDateString()

	const isFavorite = id => {
		return favoriteMovies.some(movie => movie.id === id)
	}

	const isWatched = id => {
		return watchedMovies.some(movie => movie.id === id)
	}

	const image = `https://image.tmdb.org/t/p/w1280${poster_path}`
	return (
		<MovieContainer>
			<Link to={`/movies/${id}`}>
				{poster_path ? (
					<img src={image} alt={original_title} />
				) : (
					<div className='fake-img'>
						<h2>{original_title}</h2>
					</div>
				)}
			</Link>

			{isFavorite(id) ? (
				<span
					className='movie-favorite'
					onClick={() => removeMovieFromDB('favorite', id)}>
					<FaHeart className='icon-favorite-active' />
				</span>
			) : (
				<span
					className='movie-favorite'
					onClick={() => addMovieToDB('favorite', movie)}>
					<FaRegHeart className='icon-favorite' />
				</span>
			)}
			{isWatched(id) ? (
				<span
					className='movie-watched'
					onClick={() => removeMovieFromDB('watched', id)}>
					<FaMinus className='icon-watched' />
				</span>
			) : (
				<span
					className='movie-watched'
					onClick={() => addMovieToDB('watched', movie)}>
					<FaPlus className='icon-watched' />
				</span>
			)}

			<div className='movie-info'>
				<h3>{original_title}</h3>
				<div className='movie-spans'>
					<span>{vote_average}</span>
					<span>{date}</span>
				</div>
			</div>
		</MovieContainer>
	)
}

const MovieContainer = styled.div`
	position: relative;
	background-color: #373b69;
	box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	align-self: left;

	@media (max-width: 767px) {
		width: 100%;
	}

	.fake-img {
		display: flex;
		width: 100%;
		height: 350px;
		background-color: red;
		justify-content: center;
		align-items: center;

		h2 {
			color: #fff;
			font-size: 2.5rem;
			padding: 0.5rem;
		}
	}

	img {
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}

	.movie-favorite,
	.movie-watched {
		z-index: 1;
		cursor: pointer;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 1rem;
		right: 1rem;
		color: #fff;
		font-size: 1.5rem;
		background-color: rgba(55, 59, 105, 0.7);
		border-radius: 3px;
		width: 30px;
		height: 30px;
	}

	.icon-watched {
		font-size: 1rem;
	}

	.icon-favorite {
		font-size: 1.2rem;
	}

	.icon-favorite-active {
		font-size: 1.2rem;
		color: red;
	}

	.movie-favorite {
		left: 1rem;
	}

	.movie-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 110px;
		color: #eee;
		padding: 0.5rem;
		letter-spacing: 0.5px;
	}

	.movie-info h3 {
		margin-top: 0;
		font-size: 0.85rem;
	}

	.movie-spans {
		display: flex;
		justify-content: space-around;
	}

	.movie-info span {
		background-color: #22254b;
		font-size: 0.8rem;
		padding: 0.25rem 0.5rem;
		border-radius: 3px;
		font-weight: bold;
	}
`

export default MovieCard
