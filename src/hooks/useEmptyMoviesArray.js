import { useContext } from 'react'
import MoviesContext from '../context/MoviesContext'

function useEmptyMoviesArray() {
	const { dispatch } = useContext(MoviesContext)
	const emptyMoviesArray = () => {
		dispatch({ type: 'EMPTY_MOVIES_ARRAY', payload: [] })
	}

	return [emptyMoviesArray]
}

export default useEmptyMoviesArray
