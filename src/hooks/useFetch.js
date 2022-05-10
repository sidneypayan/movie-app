function useFetch() {
	const API_KEY = '9d64e2a5fae568c0beed810bbf76d497'
	const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`
	const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`

	async function getMovieByName(movieName) {
		const res = await fetch(`${SEARCH_URL}${movieName}`)
		const data = await res.json()

		return data.results
	}

	async function getPopularMovies() {
		const res = await fetch(`${POPULAR_MOVIES_URL}`)
		const data = await res.json()

		return data.results
	}

	async function getFavoriteMovies() {
		const res = await fetch('/favorite')
		const data = await res.json()

		return data
	}

	async function getWatchedMovies() {
		const res = await fetch('/watched')
		const data = await res.json()

		return data
	}

	return {
		getMovieByName,
		getPopularMovies,
		getFavoriteMovies,
		getWatchedMovies,
	}
}

export default useFetch
