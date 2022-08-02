import React from 'react'
import loader from '../assets/loader.gif'
import styled from 'styled-components'

const Loader = () => {
	return (
		<LoaderContainer>
			<img src={loader} alt='loader' />
		</LoaderContainer>
	)
}

const LoaderContainer = styled.div`
	max-width: 200px;
	margin: auto;
	margin-top: 25vh;
`

export default Loader
