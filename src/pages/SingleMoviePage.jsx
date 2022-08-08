import React, { useEffect } from 'react'
import { useMoviesContext } from '../context/movies_context'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import noImg from '../assets/no-img.png'

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
			`https://api.themoviedb.org/3/movie/${id}?api_key=9d64e2a5fae568c0beed810bbf76d497`
		)
	}, [id])

	return (
		<Wrapper>
			<div className='single-movie-container'>
				{poster_path ? (
					<img
						className='single-movie-img'
						src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
						alt={original_title}
					/>
				) : (
					<img src={noImg} alt={original_title} />
				)}
				<div>
					<h1 className='single-movie-title'>{original_title}</h1>
					<p>{overview}</p>
					<div className='single-movie-categories-container'>
						<div className='single-movie-info-category '>
							<span className='category-title'>date de sortie</span> {date}
						</div>
						<div className='single-movie-info-category'>
							<span className='category-title'>note</span> {vote_average}
						</div>
						<div className='single-movie-info-category'>
							<span className='category-title'>budget</span>{' '}
							{formatPrice(budget)}
						</div>
						<div className='single-movie-info-category'>
							<span className='category-title'>profit</span>{' '}
							{formatPrice(revenue)}
						</div>
						<div className='single-movie-info-category'>
							<span className='category-title'>genres</span>
							{genres && genres.map(item => <span> {item.name}</span>)}
						</div>
						<div className='single-movie-info-category'>
							<span className='category-title'>studio de production</span>
							{production_companies &&
								production_companies.map(item => <span> {item.name}</span>)}
						</div>
					</div>
					<button
						className='btn btn-back'
						type='button'
						onClick={() => navigate(-1)}>
						&larr; Retour aux films
					</button>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 65vw;
	margin: 4rem auto;

	@media (max-width: 1279px) {
		width: 90vw;
	}

	.single-movie-container {
		display: flex;
		gap: 4rem;
		color: #fff;

		@media (max-width: 1179px) {
			flex-direction: column;
		}
	}

	.single-movie-img {
		margin: 0 auto;
		min-width: 350px;
		width: 30%;
	}

	.single-movie-title {
		margin-bottom: 1.5rem;
	}

	.single-movie-categories-container {
		width: 70%;
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
	}

	.single-movie-info-category {
		margin-bottom: 1rem;

		span {
			border-radius: 5px;
			padding: 0.25rem;
		}

		.category-title {
			background-color: #373b69;
		}
	}

	.btn-back {
		margin: 0 auto;
		margin-top: 2rem;
	}
`

export default SingleMoviePage
