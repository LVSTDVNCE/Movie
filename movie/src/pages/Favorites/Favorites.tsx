import React from 'react'
import { useSelector } from 'react-redux'
import {
	Container,
	Typography,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Button,
} from '@mui/material'
import { RootState } from '../../redux/store/Store'
import { Link } from 'react-router-dom'

const Favorites: React.FC = () => {
	// Получаем список избранных фильмов из Redux store
	const favorites = useSelector((state: RootState) => state.favorites.favorites)
	const imageLink = 'https://image.tmdb.org/t/p/w500'

	return (
		<Container
			maxWidth='lg'
			style={{
				marginTop: '20px',
				padding: '20px',
				borderRadius: '8px',
			}}
		>
			<Typography variant='h3' component='div' gutterBottom>
				Избранные фильмы
			</Typography>

			{favorites.length === 0 ? (
				<Typography variant='h6' color='text.secondary'>
					Нет избранных фильмов.
				</Typography>
			) : (
				<Grid container spacing={4}>
					{favorites.map(movie => (
						<Grid item xs={12} sm={6} md={4} key={movie.id}>
							<Card>
								<CardMedia
									component='img'
									image={`${imageLink}${movie.poster_path}`}
									alt={movie.title}
									style={{ objectFit: 'contain' }}
								/>
								<CardContent>
									<Typography variant='h6' component='div'>
										{movie.title}
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										{movie.original_title}
									</Typography>
								</CardContent>
								<Button size='small'>
									<Link to='/MovieAbout' state={{ from: movie }}>
										Watch
									</Link>
								</Button>
							</Card>
						</Grid>
					))}
				</Grid>
			)}
		</Container>
	)
}

export default Favorites
