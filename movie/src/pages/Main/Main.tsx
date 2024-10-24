import React, { useEffect, useState } from 'react'
import {
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	CardMedia,
	CircularProgress,
	CardActions,
	Button,
} from '@mui/material'
import { Link } from 'react-router-dom'

interface IWeekF {
	title: string
	poster_path: string // Assuming you want to display the poster image
}

interface IWeekT {
	name: string
	poster_path: string // Assuming you want to display the poster image
}

const Main: React.FC = () => {
	const [weekFilms, setWeekFilms] = useState<IWeekF[]>([])
	const [weekTv, setWeekTv] = useState<IWeekT[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODg3NmRiYTE1YjFiODc4Y2Q1MjMxZTE5OGFhOTFjMCIsIm5iZiI6MTcyOTYxMTc5My4xODk0MDUsInN1YiI6IjY3MDgxNDFmMWQ5NmRjNmQ0NzZhNGEyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Oljxz7ztFwvLv1CLTCHeVWHXNBBy3EylN6qy20nGEw',
			},
		}

		const fetchData = async () => {
			try {
				const filmResponse = await fetch(
					'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
					options
				)
				const filmData = await filmResponse.json()
				setWeekFilms(filmData.results)

				const tvResponse = await fetch(
					'https://api.themoviedb.org/3/trending/tv/week?language=en-US',
					options
				)
				const tvData = await tvResponse.json()
				setWeekTv(tvData.results)
			} catch (err) {
				console.error(err)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	if (loading) {
		return (
			<Container>
				<CircularProgress />
			</Container>
		)
	}
	const limitedFilms = weekFilms.slice(0, 9)
	const limitedTv = weekTv.slice(0, 9)

	return (
		<Container>
			<Typography variant='h4' gutterBottom>
				Популярное за неделю
			</Typography>
			<Typography variant='h5' gutterBottom>
				Фильмы:
			</Typography>
			<Grid container spacing={2}>
				{limitedFilms.map((item, key) => (
					<Grid item xs={12} sm={6} md={4} key={key}>
						<Card>
							<CardMedia
								component='img'
								height='300'
								image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
								alt={item.title}
							/>
							<CardContent>
								<Typography variant='h6'>{item.title}</Typography>
							</CardContent>
							<CardActions>
								<Button size='small'>
									<Link to='/MovieAbout' state={{ from: item }}>
										Watch
									</Link>
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
			<Typography variant='h5' gutterBottom>
				TV:
			</Typography>
			<Grid container spacing={2}>
				{limitedTv.map((item, key) => (
					<Grid item xs={12} sm={6} md={4} key={key}>
						<Card>
							<CardMedia
								component='img'
								height='300'
								image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
								alt={item.name}
							/>
							<CardContent>
								<Typography variant='h6'>{item.name}</Typography>
							</CardContent>
							<CardActions>
								<Button size='small'>
									<Link to='/MovieAbout' state={{ from: item }}>
										Watch
									</Link>
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default Main
