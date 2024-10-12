import React from 'react'
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@mui/material'
import MovieCard from './../../type/type'

interface MovieListCard {
	movie: MovieCard
}

const MovieListCard: React.FC<MovieListCard> = ({ movie }) => {
	const imageLink = 'https://image.tmdb.org/t/p/w500'
	return (
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
	)
}

export default MovieListCard
