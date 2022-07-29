import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMoviePage = () => {
	const { id } = useParams()
	console.log(id)
	return <div>SingleMoviePage</div>
}

export default SingleMoviePage
