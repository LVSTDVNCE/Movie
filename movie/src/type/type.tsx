export default interface Movie {
	id: number
	title: string
	poster_path: string
	original_title: string
	overview: string
}

export default interface MovieCard {
	movie: Movie[]
}
