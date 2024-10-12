import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Container } from '@mui/material'

const Layout = () => {
	return (
		<Container>
			<Header />
			<Outlet />
			<Footer />
		</Container>
	)
}

export default Layout
