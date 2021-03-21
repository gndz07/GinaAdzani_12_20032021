import React from 'react';
import logo from '../assets/sportsee-logo.JPG'

export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<img src={logo} alt="navigate to homepage" />
				<nav className="navbar">
					<p className="nav-menu">Accueil</p>
					<p className="nav-menu">Profil</p>
					<p className="nav-menu">Réglage</p>
					<p className="nav-menu">Communauté</p>
				</nav>
			</header>
		)
	}
}