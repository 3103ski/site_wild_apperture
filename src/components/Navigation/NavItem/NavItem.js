import React from "react"

import { Link } from "gatsby"

const NavItem = props => {
	const link = `${props.link}`
	return (
		<li>
			<Link activeClassName='active' to={link}>
				{props.title}
			</Link>
		</li>
	)
}

export default NavItem
