import React from 'react'
import MovieListCard from '../MovieListCard/MovieListCard'
import Movie from './../../type/type'

interface MovieList {
	movieList: Movie[]
}

const MovieList: React.FC<MovieList> = ({ movieList }) => {
	return (
		<div>
			{movieList.map(movie => (
				<MovieListCard movie={movie} />
			))}
		</div>
	)
}

export default MovieList
