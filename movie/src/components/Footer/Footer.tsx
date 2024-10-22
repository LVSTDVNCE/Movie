import { Container, Typography, Link, Box } from '@mui/material'

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

const Footer = () => {
	return (
		<Box
			sx={{
				padding: 3,
				minWidth: '1104px',
				marginTop: 'auto',
				backgroundColor: theme => theme.palette.grey[200],
				position: 'static',
				bottom: 0,
				borderRadius: '20px 20px 0 0',
			}}
		>
			<Container maxWidth='sm' sx={{ textAlign: 'center' }}>
				<Typography variant='body2'>Watch movies with us</Typography>
				<Copyright />
			</Container>
		</Box>
	)
}

export default Footer
