import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Main from './pages/Main/Main'
import AllMovies from './pages/AllMovies/AllMovies'
import MovieAbout from './pages/MovieAbout/MovieAbout'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
				<Route path='AllMovies' element={<AllMovies />} />
				<Route path='MovieAbout' element={<MovieAbout />} />
			</Route>
		</Routes>
	)
}

export default App
