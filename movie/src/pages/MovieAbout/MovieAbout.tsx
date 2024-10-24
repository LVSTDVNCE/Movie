import { useLocation } from 'react-router-dom'
import {
	Container,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Button,
	Box,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useDispatch, useSelector } from 'react-redux'
import {
	addToFavorites,
	removeFromFavorites,
} from './../../redux/favoritesSlice/favoritesSlice'

const MoviePage = () => {
	const location = useLocation()
	const { from } = location.state || {}
	const imageLink = 'https://image.tmdb.org/t/p/w500'

	const dispatch = useDispatch()
	const favorites = useSelector((state: any) => state.favorites.favorites)

	const isFavorite = favorites.some(
		(movie: { id: any }) => movie.id === from?.id
	)

	const handleFavoriteClick = () => {
		if (isFavorite) {
			dispatch(removeFromFavorites(from.id))
		} else {
			dispatch(addToFavorites(from))
		}
	}

	if (!from) {
		return (
			<Container maxWidth='md' style={{ marginTop: '20px' }}>
				<Typography variant='h5' color='text.secondary'>
					Фильм не найден.
				</Typography>
			</Container>
		)
	}

	return (
		<Container
			maxWidth='lg'
			style={{
				marginTop: '20px',
				padding: '20px',
				borderRadius: '8px',
			}}
		>
			<Grid container spacing={4}>
				<Grid size={{ xs: 4, md: 4 }}>
					<Card>
						<CardMedia
							component='img'
							alt={from.title}
							image={`${imageLink}${from.poster_path}`}
							sx={{ objectFit: 'contain' }}
						/>
					</Card>
				</Grid>
				<Grid size={{ xs: 8, md: 8 }}>
					<Card>
						<CardContent>
							<Typography variant='h3' component='div' gutterBottom>
								{from.title}
							</Typography>
							<Typography variant='h6' color='text.secondary'>
								{from.original_title}
							</Typography>
							<Typography
								variant='body1'
								color='text.secondary'
								style={{ marginTop: '10px' }}
							>
								Рейтинг: {from.vote_average} / 10
							</Typography>
							<Typography
								variant='body2'
								color='text.secondary'
								style={{ marginTop: '10px' }}
							>
								{from.description}
							</Typography>
							<Box mt={2}>
								<Button
									variant='contained'
									color='primary'
									style={{
										marginRight: '10px',
										backgroundImage: `url("${imageLink}${from.backdrop_path}")`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
										textShadow: '1px 1px 7px rgba(0, 0, 0, 1)',
									}}
								>
									Смотреть трейлер
								</Button>
								<Button
									variant={isFavorite ? 'contained' : 'outlined'}
									color={isFavorite ? 'error' : 'secondary'}
									onClick={handleFavoriteClick}
								>
									{isFavorite
										? 'Удалить из избранного'
										: 'Добавить в избранное'}
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	)
}

export default MoviePage
