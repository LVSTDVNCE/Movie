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
import { Link } from 'react-router-dom'

interface MovieListCard {
	movie: MovieCard
}

const MovieListCard: React.FC<MovieListCard> = ({ movie }) => {
	const imageLink = 'https://image.tmdb.org/t/p/w500'
	return (
		<Card
			key={movie.id}
			sx={{ display: 'flex', position: 'relative', maxWidth: '100%' }}
		>
			<CardMedia
				component='img'
				alt={movie.title}
				height='140'
				image={`${imageLink}${movie.poster_path}`}
				sx={{ objectFit: 'contain', maxWidth: 300, height: 300 }}
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
				<Button
					size='small'
					sx={{ position: 'absolute', bottom: 20, right: 20 }}
				>
					<Link to='/MovieAbout'>Watch</Link>
				</Button>
			</CardActions>
		</Card>
	)
}

export default MovieListCard
