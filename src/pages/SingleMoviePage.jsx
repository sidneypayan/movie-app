import React, { useEffect } from 'react'
import { useMoviesContext } from '../context/movies_context'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'

const SingleMoviePage = () => {
	const {
		fetchSingleMovie,
		movie: {
			original_title,
			budget,
			overview,
			poster_path,
			release_date,
			revenue,
			vote_average,
			production_companies,
			genres,
		},
	} = useMoviesContext()

	const { id } = useParams()
	const navigate = useNavigate()

	const date = new Date(release_date).toLocaleDateString()

	useEffect(() => {
		fetchSingleMovie(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
		)
	}, [id])

	return (
		<Wrapper>
			<div className='single-movie-container'>
				<img
					src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
					alt={original_title}
				/>
				<div>
					<p>{overview}</p>
					<div className='movie-info-container'>
						<div className='movie-info-category '>
							<span className='color-1'>date de sortie</span> {date}
						</div>
						<div className='movie-info-category'>
							<span className='color-2'>note</span> {vote_average}
						</div>
						<div className='movie-info-category'>
							<span className='color-3'>budget</span> {formatPrice(budget)}
						</div>
						<div className='movie-info-category'>
							<span className='color-4'>profit</span> {formatPrice(revenue)}
						</div>
						<div className='movie-info-category'>
							<span className='color-5'>genres</span>
							{genres && genres.map(item => <span> {item.name}</span>)}
						</div>
						<div className='movie-info-category'>
							<span className='color-6'>studio de production</span>
							{production_companies &&
								production_companies.map(item => <span> {item.name}</span>)}
						</div>
					</div>
					<button className='btn' type='button' onClick={() => navigate(-1)}>
						Retour
					</button>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 65%;
	margin: 4rem auto;

	.single-movie-container {
		display: flex;
		gap: 4rem;
		color: #fff;
		img {
			width: 450px;
		}

		@media (max-width: 768px) {
			display: block;
		}
	}

	.movie-info-container {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
	}

	.movie-info-category {
		margin-bottom: 1rem;

		span {
			border-radius: 5px;
			padding: 0.2rem;
		}
		.color-1 {
			background-color: #fcbf49;
		}
		.color-2 {
			background-color: #ee6c4d;
		}
		.color-3 {
			background-color: #8cb369;
		}
		.color-4 {
			background-color: #227c9d;
		}
		.color-4 {
			background-color: #0582ca;
		}
		.color-5 {
			background-color: #495867;
		}
		.color-6 {
			background-color: #f19c79;
		}
	}
`

export default SingleMoviePage
