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
		return { ...state, movies_loading: true }
	}

	if (action.type === 'GET_MOVIES_SUCCESS') {
		return {
			...state,
			movies_loading: false,
			movies: action.payload,
			error: false,
		}
	}

	if (action.type === 'GET_MOVIES_ERROR') {
		return { ...state, movies_loading: false, movies_error: true }
	}

	if (action.type === 'GET_SINGLE_MOVIE_BEGIN') {
		return { ...state, single_movie_loading: true }
	}

	if (action.type === 'GET_SINGLE_MOVIE_SUCCESS') {
		return {
			...state,
			single_movie_loading: false,
			single_movie_error: false,
			movie: action.payload,
		}
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
