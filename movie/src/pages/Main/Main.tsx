import React, { useEffect, useState } from 'react'
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@mui/material'

interface Movie {
	id: number
	title: string
	poster_path: string
	original_title: string
	overview: string
}

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

	const imageLink = 'https://image.tmdb.org/t/p/w500'

	return (
		<main
			style={{
				margin: '0 auto',
				marginTop: '20px',
				width: '1100px',
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				gap: '32px',
			}}
		>
			{movieList.map(movie => (
				<Card sx={{ maxWidth: 345 }} key={movie.id}>
					<CardMedia
						component='img'
						alt={movie.title}
						height='140'
						image={`${imageLink}${movie.poster_path}`}
						sx={{ objectFit: 'cover' }}
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{movie.original_title}
						</Typography>
						<Typography variant='body2' sx={{ color: 'text.secondary' }}>
							{movie.overview}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size='small'>Share</Button>
						<Button size='small'>Learn More</Button>
					</CardActions>
				</Card>
			))}
		</main>
	)
}

export default Main
