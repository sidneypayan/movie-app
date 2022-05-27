const SEARCH_MOVIE_URL = `https://api.themoviedb.org/3/search/movie?api_key=9d64e2a5fae568c0beed810bbf76d497&query=`
const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=9d64e2a5fae568c0beed810bbf76d497&page=1`
const NOW_PLAYING_MOVIES_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=9d64e2a5fae568c0beed810bbf76d497&page=1`
const UPCOMING_MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=9d64e2a5fae568c0beed810bbf76d497&page=1`
const TOP_RATED_MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=9d64e2a5fae568c0beed810bbf76d497&page=1`

export const searchMovies = async movieName => {
	const res = await fetch(`${SEARCH_MOVIE_URL}${movieName}`)
	const data = await res.json()
	return data.results
}

export const getPopularMovies = async () => {
	const res = await fetch(POPULAR_MOVIES_URL)
	const data = await res.json()
	return data.results
}

export const getNowPlayingMovies = async () => {
	const res = await fetch(NOW_PLAYING_MOVIES_URL)
	const data = await res.json()
	return data.results
}

export const getUpcommingMovies = async () => {
	const res = await fetch(UPCOMING_MOVIES_URL)
	const data = await res.json()
	return data.results
}

export const getTopRatedMovies = async () => {
	const res = await fetch(TOP_RATED_MOVIES_URL)
	const data = await res.json()
	return data.results
}

export const getMoviesFromDB = async category => {
	const res = await fetch(`/${category}`)
	const data = await res.json()
	return data
}

export const addMovieToDB = async (movie, category) => {
	const res = await fetch(`/${category}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(movie),
	})

	const data = await res.json()
	return data
}

export const deleteMovieFromDB = async (id, category) => {
	await fetch(`/${category}/${id}`, {
		method: 'DELETE',
	})
}
