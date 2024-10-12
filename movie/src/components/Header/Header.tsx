import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' sx={{ backgroundColor: '#999' }}>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='open drawer'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						Movie
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header
