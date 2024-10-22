import React, { useEffect, useState } from 'react'
import SideNav from '../../components/SideNav/SideNav'

interface IWeekF {
	title: string
}

interface IWeekT {
	title: string
}

const Main: React.FC = () => {
	const [weekFilms, setWeekFilms] = useState<IWeekF[]>([])
	const [weekTv, setWeekTv] = useState<IWeekT[]>([])

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODg3NmRiYTE1YjFiODc4Y2Q1MjMxZTE5OGFhOTFjMCIsIm5iZiI6MTcyOTYxMTc5My4xODk0MDUsInN1YiI6IjY3MDgxNDFmMWQ5NmRjNmQ0NzZhNGEyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Oljxz7ztFwvLv1CLTCHeVWHXNBBy3EylN6qy20nGEw',
			},
		}

		fetch(
			'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
			options
		)
			.then(res => res.json())
			.then(res => setWeekFilms(res.results))
			.catch(err => console.error(err))

		fetch(
			'https://api.themoviedb.org/3/trending/tv/week?language=en-US',
			options
		)
			.then(res => res.json())
			.then(res => console.log(res.results))
			.catch(err => console.error(err))
	})
	return (
		<div>
			<h1>Популярное за неделю</h1>
			<h2>Фильмы:</h2>
			{weekFilms.map((item, key) => (
				<div>{item.title}</div>
			))}
			<h2>TV:</h2>
			{weekTv.map((item, key) => (
				<div>{item.title}</div>
			))}
		</div>
	)
}

export default Main
