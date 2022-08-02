import { useState, useMemo } from 'react'
import styled from 'styled-components'
import { useMoviesContext } from '../context/movies_context'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

const Pagination = () => {
	const { currentPage, nbPages, dispatch } = useMoviesContext()
	const pageNumbers = []
	const [minSlice, setMinSlice] = useState(() => {
		if (currentPage <= 2) {
			return 0
		}
		return currentPage - 3
	})
	const [maxSlice, setMaxSlice] = useState(currentPage + 1)

	for (let i = 2; i < nbPages; i++) {
		pageNumbers.push(i)
	}

	const prevPage = () => {
		let page
		if (currentPage <= 1) {
			return
		} else {
			page = currentPage - 1
		}

		dispatch({ type: 'CHANGE_PAGE', payload: page })
	}

	const nextPage = () => {
		let page
		if (currentPage >= nbPages) {
			return
		} else {
			page = currentPage + 1
		}

		dispatch({ type: 'CHANGE_PAGE', payload: page })
	}

	const handleLastPage = pageNumber => {
		setMaxSlice(pageNumbers - 2)
		setMinSlice(pageNumbers - 4)

		dispatch({ type: 'CHANGE_PAGE', payload: pageNumber })
		// console.log(pageNumber)
	}

	return (
		<PaginationContainer>
			{currentPage !== 1 && (
				<button type='button' onClick={prevPage}>
					<FaLongArrowAltLeft />
				</button>
			)}
			<button
				className={`${currentPage === 1 && 'active-page'}`}
				type='button'
				onClick={() => dispatch({ type: 'CHANGE_PAGE', payload: 1 })}>
				{1}
			</button>

			{pageNumbers.slice(minSlice, maxSlice).map((pageNumber, index) => {
				return (
					<button
						key={index}
						className={`${pageNumber === currentPage && 'active-page'}`}
						type='button'
						onClick={() =>
							dispatch({ type: 'CHANGE_PAGE', payload: pageNumber })
						}>
						{pageNumber}
					</button>
				)
			})}

			<button
				className={`${currentPage === pageNumbers.length + 2 && 'active-page'}`}
				type='button'
				onClick={() => handleLastPage(pageNumbers.length + 2)}>
				{pageNumbers.length + 2}
			</button>
			<button type='button' onClick={nextPage}>
				<FaLongArrowAltRight />
			</button>
		</PaginationContainer>
	)
}

const PaginationContainer = styled.div`
	width: fit-content;
	display: flex;
	margin: 3rem auto;

	button {
		background-color: transparent;
		cursor: pointer;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		width: 30px;
		height: 30px;
		color: #fff;

		border-radius: 5px;
		margin: 0.15rem;
	}

	.active-page {
		background-color: #373b69;
	}
`

export default Pagination
