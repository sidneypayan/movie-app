const moviesReducer = (state, action) => {
	switch (action.type) {
		case 'GET_MOVIES':
			return {
				...state,
				movies: action.payload,
			}
		case 'GET_POPULAR_MOVIES':
			return {
				...state,
				popularMovies: action.payload,
			}
		case 'GET_FAVORITE_MOVIES':
			return {
				...state,
				favoriteMovies: action.payload,
			}
		case 'GET_WATCHED_MOVIES':
			return {
				...state,
				watchedMovies: action.payload,
			}
		case 'ADD_MOVIE_TO_FAVORITE':
			return {
				...state,
				favoriteMovies: [...state.favoriteMovies, action.payload],
			}
		case 'DELETE_MOVIE_FROM_FAVORITE':
			return {
				...state,
				favoriteMovies: state.favoriteMovies.filter(
					item => item.id !== action.payload
				),
			}
		case 'ADD_MOVIE_TO_WATCHED':
			return {
				...state,
				watchedMovies: [...state.watchedMovies, action.payload],
			}
		case 'DELETE_MOVIE_FROM_WATCHED':
			return {
				...state,
				watchedMovies: state.watchedMovies.filter(
					item => item.id !== action.payload
				),
			}

		default:
			return state
	}
}

export default moviesReducer
