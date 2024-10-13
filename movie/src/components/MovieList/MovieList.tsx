import React from 'react'
import MovieListCard from '../MovieListCard/MovieListCard'
import Movie from './../../type/type'

interface MovieList {
	movieList: Movie[]
}

const MovieList: React.FC<MovieList> = ({ movieList }) => {
	return (
		<>
			{movieList.map((movie, key) => (
				<MovieListCard movie={movie} key={key} />
			))}
		</>
	)
}

export default MovieList
