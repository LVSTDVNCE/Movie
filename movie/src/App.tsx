import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Main from './pages/Main/Main'
import AllMovies from './pages/AllMovies/AllMovies'
import MovieAbout from './pages/MovieAbout/MovieAbout'
import Favorites from './pages/Favorites/Favorites'
import { Provider } from 'react-redux'
import { store } from './redux/store/Store'

function App() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Main />} />
					<Route path='AllMovies' element={<AllMovies />} />
					<Route path='MovieAbout' element={<MovieAbout />} />
					<Route path='Favorites' element={<Favorites />} />
				</Route>
			</Routes>
		</Provider>
	)
}

export default App
