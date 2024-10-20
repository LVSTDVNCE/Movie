import React from 'react'
import { IconButton, Drawer, Divider, List, ListItem } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Link } from 'react-router-dom'

const drawerWidth = 240

interface DrawerHeader {
	open: boolean
	handleDrawerClose: () => void
}

const DrawerHeader: React.FC<DrawerHeader> = ({ open, handleDrawerClose }) => {
	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
				},
			}}
			variant='persistent'
			anchor='left'
			open={open}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
				}}
			>
				<IconButton onClick={handleDrawerClose}>
					{open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</div>
			<Divider />
			<List>
				{['', 'AllMovies', 'Favorites'].map(text => (
					<ListItem key={text} disablePadding>
						<Link to={`/${text}`} style={{ margin: '20px 0px 20px 20px' }}>
							{text === '' ? 'Main' : text}
						</Link>
					</ListItem>
				))}
			</List>
			<Divider />
		</Drawer>
	)
}

export default DrawerHeader
