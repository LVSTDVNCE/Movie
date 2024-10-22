import React from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DrawerHeader from '../DrawerHeader/DrawerHeader'

const Header = () => {
	const [open, setOpen] = React.useState(false)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<Box
			sx={{
				position: 'sticky',
				top: 0,
				zIndex: 10,
			}}
		>
			<AppBar
				position='static'
				sx={{ backgroundColor: '#999', borderRadius: '0 0 20px 20px' }}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={[
							{
								mr: 2,
							},
							open && { display: 'none' },
						]}
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
			<DrawerHeader open={open} handleDrawerClose={handleDrawerClose} />
		</Box>
	)
}

export default Header
