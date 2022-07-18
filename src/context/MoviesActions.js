const API_KEY = `?api_key=${process.env.REACT_APP_API_KEY}`
const SEARCH_MOVIE_URL = `https://api.themoviedb.org/3/search/movie${API_KEY}&query=`

export const searchMovies = async movieName => {
	const res = await fetch(`${SEARCH_MOVIE_URL}${movieName}`)
	const data = await res.json()
	return data.results
}

export const getMovies = async category => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${category}${API_KEY}&page=1`
	)
	const data = await res.json()
	return data.results
}

export const getMoviesFromDB = async category => {
	localStorage.getItem(category)
}
