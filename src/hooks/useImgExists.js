function useImgExists() {
	function imgExists(movie) {
		if (movie.poster_path) {
			return (
				<img
					src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
					alt={movie.title}
				/>
			)
		} else {
			return (
				<div className='movie-no-img'>
					<h2>{movie.title}</h2>
				</div>
			)
		}
	}

	return { imgExists }
}

export default useImgExists
