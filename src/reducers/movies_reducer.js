const movies_reducer = (state, action) => {
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
	if (action.type === 'GET_CATEGORY') {
		return { ...state, category: action.payload }
	}
}

export default movies_reducer
