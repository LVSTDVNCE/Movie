import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
	return (
		<aside>
			<nav>
				<Link to='/AllMovies'>Movies</Link>
			</nav>
		</aside>
	)
}

export default SideNav
