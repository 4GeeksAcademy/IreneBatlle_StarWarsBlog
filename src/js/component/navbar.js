import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";


export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<div className="navbar-content">
				<Link to="/">
					<img className="star-wars-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png" alt="Star Wars Logo" />
				</Link>
			</div>
		</nav>
	);
};
