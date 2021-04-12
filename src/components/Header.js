import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/sportsee-logo.JPG'

/**
* Header component, contains a logo that will redirect to Homepage, and 4 other menus that are empty for the time being.
*/
export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<nav className="navbar">
					<NavLink to='/' exact={true}>
						<img src={logo} className="logo" alt="navigate to homepage" />
					</NavLink>
					<NavLink to='/' exact={true} className="nav-menu">Accueil</NavLink>
					<NavLink to='/' exact={true} className="nav-menu">Profil</NavLink>
					<NavLink to='/' exact={true} className="nav-menu">Réglage</NavLink>
					<NavLink to='/' exact={true} className="nav-menu">Communauté</NavLink>
				</nav>
			</header>
		)
	}
}