import React, { useEffect } from 'react'
import { useMoviesContext } from '../context/movies_context'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const SingleMoviePage = () => {
	const {
		dispatch,
		movies: {
			original_title,
			budget,
			overview,
			poster_path,
			release_date,
			revenue,
			vote_average,
		},
	} = useMoviesContext()
	const { id } = useParams()
	console.log(
		original_title,
		budget,
		overview,
		poster_path,
		release_date,
		revenue,
		vote_average
	)

	useEffect(() => {
		dispatch({ type: 'GET_MOVIE_ID', payload: id })
	}, [dispatch, id])

	return (
		<Wrapper>
			<div className='single-movie-container'>
				<img
					src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
					alt={original_title}
				/>
				<div className='movie-info'>
					<p>{overview}</p>
					<div>
						<span>date: {release_date}</span>
						<span>vote: {vote_average}</span>
						<span>budget: {budget}</span>
						<span>$: {revenue}</span>
					</div>
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
	}
`

export default SingleMoviePage
