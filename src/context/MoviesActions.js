const SEARCH_MOVIE_URL = `https://api.themoviedb.org/3/search/movie?api_key=9d64e2a5fae568c0beed810bbf76d497&query=`

export const searchMovies = async movieName => {
	const res = await fetch(`${SEARCH_MOVIE_URL}${movieName}`)
	const data = await res.json()
	return data.results
}

export const getMovies = async category => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${category}?api_key=9d64e2a5fae568c0beed810bbf76d497&page=1`
	)
	const data = await res.json()
	return data.results
}

export const getMoviesFromDB = async category => {
	localStorage.getItem(category)
}

// export const addMovieToDB = async (movie, category) => {
// 	localStorage.setItem(category, movie)
// }

// export const deleteMovieFromDB = async (id, category) => {
// 	await fetch(`/${category}/${id}`, {
// 		method: 'DELETE',
// 	})
// }
