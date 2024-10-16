import React, { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList'
import Movie from './../../type/type'
import { Container } from '@mui/material'
import Search from '../../components/Search/Search'
import axios from 'axios'
import { Pagination } from '@mui/material'

const Main = () => {
	const [movieList, setMovieList] = useState<Movie[]>([])
	const [fullMovieList, setFullMovieList] = useState<Movie[]>([])
	const [search, setSearch] = useState('')
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 12
	const [totalPages, setTotalPages] = useState(0)

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

	const getMovie = async (page: number) => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/popular`,
				{
					params: {
						api_key: '18876dba15b1b878cd5231e198aa91c0',
						page: page,
					},
				}
			)
			setMovieList(response.data.results)
			setFullMovieList(response.data.results)
			setTotalPages(response.data.total_pages)
			setLoading(false)
		} catch (err: any) {
			setError(err)
			setLoading(false)
		}
	}

	useEffect(() => {
		getMovie(currentPage)
	}, [currentPage])

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setCurrentPage(value)
	}

	return (
		<Container
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: '34px',
				marginTop: '20px',
			}}
		>
			<Search value={search} onChange={handleChange} />
			<MovieList movieList={movieList.slice(0, itemsPerPage)} />
			<Pagination
				count={totalPages}
				variant='outlined'
				shape='rounded'
				page={currentPage}
				onChange={handlePageChange}
				color='primary'
				sx={{ marginBottom: '20px' }}
			/>
		</Container>
	)
}

export default Main
