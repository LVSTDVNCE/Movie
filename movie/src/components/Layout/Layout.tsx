import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Container } from '@mui/material'

const Layout = () => {
	return (
		<Container sx={{ display: 'flex', flexDirection: 'column' }}>
			<Header />
			<Outlet />
			<Footer />
		</Container>
	)
}

export default Layout
