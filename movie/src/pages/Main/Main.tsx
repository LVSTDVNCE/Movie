import React, { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList'
import Movie from './../../type/type'

const Main = () => {
	const [movieList, setMovieList] = useState<Movie[]>([])

	const getMovie = () => {
		fetch(
			'https://api.themoviedb.org/3/discover/movie?api_key=18876dba15b1b878cd5231e198aa91c0'
		)
			.then(res => res.json())
			.then(json => setMovieList(json.results))
	}

	useEffect(() => {
		getMovie()
		console.log(movieList)
	}, [])

	return (
		<main>
			<MovieList movieList={movieList} />
		</main>
	)
}

export default Main
