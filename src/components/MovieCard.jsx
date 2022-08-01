import styled from 'styled-components'
import { FaRegHeart, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MovieCard = ({
	id,
	original_title: title,
	poster_path,
	vote_average: vote,
	release_date: date,
}) => {
	const image = `https://image.tmdb.org/t/p/w1280${poster_path}`
	return (
		<MovieContainer>
			<Link to={`movies/${id}`}>
				<img src={image} alt={title} />
			</Link>
			<span className='movie-favorite'>
				<FaRegHeart className='icon-favorite' />
			</span>
			<span className='movie-watched'>
				<FaPlus className='icon-watched' />
			</span>
			<div className='movie-info'>
				<h3>{title}</h3>
				<div className='movie-spans'>
					<span>{vote}</span>
					<span>{date}</span>
				</div>
			</div>
		</MovieContainer>
	)
}

const MovieContainer = styled.div`
	position: relative;
	width: 175px;
	margin: 1rem;
	background-color: #373b69;
	box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
	position: relative;
	overflow: hidden;
	border-radius: 3px;

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
		background-color: #373b69;
		opacity: 0.7;
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
