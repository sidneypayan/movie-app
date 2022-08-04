const movies_reducer = (state, action) => {
	if (action.type === 'GET_CATEGORY') {
		return { ...state, category: action.payload }
	}

	if (action.type === 'GET_NUMBER_OF_PAGES') {
		return { ...state, nbPages: action.payload }
	}

	if (action.type === 'CHANGE_PAGE') {
		return { ...state, currentPage: action.payload }
	}

	if (action.type === 'GET_MOVIES_BEGIN') {
		return { ...state, loading: true }
	}

	if (action.type === 'GET_MOVIES_SUCCESS') {
		return { ...state, loading: false, movies: action.payload }
	}

	if (action.type === 'GET_MOVIES_ERROR') {
		return { ...state, loading: false, error: true }
	}

	if (action.type === 'SET_QUERY') {
		return { ...state, query: action.payload }
	}

	if (action.type === 'ADD_MOVIE_TO_DB') {
		const { category, movie } = action.payload

		if (category === 'favorite') {
			return { ...state, favoriteMovies: [...state.favoriteMovies, movie] }
		}
		if (category === 'watched') {
			return { ...state, watchedMovies: [...state.watchedMovies, movie] }
		}
	}

	if (action.type === 'REMOVE_MOVIE_FROM_DB') {
		const { category, id } = action.payload

		if (category === 'favorite') {
			return {
				...state,
				favoriteMovies: state.favoriteMovies.filter(movie => movie.id !== id),
			}
		}
		if (category === 'watched') {
			return {
				...state,
				watchedMovies: state.watchedMovies.filter(movie => movie.id !== id),
			}
		}
	}
}

export default movies_reducer
