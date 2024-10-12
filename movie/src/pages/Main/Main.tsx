import React, { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList'
import Movie from './../../type/type'
import { Container } from '@mui/material'
import Search from '../../components/Search/Search'

const Main = () => {
	const [movieList, setMovieList] = useState<Movie[]>([])
	const [fullMovieList, setFullMovieList] = useState<Movie[]>([])
	const [search, setSearch] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.toLowerCase()
		setSearch(value)

		if (value === '') {
			setMovieList(fullMovieList)
		} else {
			setMovieList(
				fullMovieList.filter(movie =>
					movie.original_title.toLowerCase().includes(value)
				)
			)
		}
	}

	const getMovie = () => {
		fetch(
			'https://api.themoviedb.org/3/discover/movie?api_key=18876dba15b1b878cd5231e198aa91c0'
		)
			.then(res => res.json())
			.then(json => {
				setMovieList(json.results)
				setFullMovieList(json.results)
			})
	}

	useEffect(() => {
		getMovie()
	}, [])

	return (
		<Container
			sx={{ display: 'flex', flexWrap: 'Wrap', gap: '34px', marginTop: '20px' }}
		>
			<Search value={search} onChange={handleChange} />
			<MovieList movieList={movieList} />
		</Container>
	)
}

export default Main
