import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/sportsee-logo.JPG'

/** @constructor Header */
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