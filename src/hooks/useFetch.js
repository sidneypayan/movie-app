function useFetch() {
	const API_KEY = '9d64e2a5fae568c0beed810bbf76d497'
	const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`
	const TREND_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`

	async function getMovieByName(movieName) {
		const res = await fetch(`${SEARCH_URL}${movieName}`)
		const data = await res.json()

		return data
	}

	async function getTrendingMovies() {
		const res = await fetch(`${TREND_URL}`)
		const data = await res.json()

		return data.results
	}

	return { getMovieByName, getTrendingMovies }
}

export default useFetch
