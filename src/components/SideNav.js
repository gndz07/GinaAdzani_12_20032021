import React from 'react';
import menu1 from '../assets/menu-1.JPG';
import menu2 from '../assets/menu-2.JPG';
import menu3 from '../assets/menu-3.JPG';
import menu4 from '../assets/menu-4.JPG';


export default class SideNav extends React.Component {
	render() {
		return (
			<div id="side-container">
				<div className="side-nav">
					<div className="menu-box">
						<img src={menu1} alt="navigate to menu" className="menu-img" />
					</div>
					<div className="menu-box">
						<img src={menu2} alt="navigate to menu" className="menu-img" />
					</div>
					<div className="menu-box">
						<img src={menu3} alt="navigate to menu" className="menu-img" />
					</div>
					<div className="menu-box">
						<img src={menu4} alt="navigate to menu" className="menu-img" />
					</div>
				</div>
				<p className="side-nav-text">Copyright, SportSee {(new Date().getFullYear())}</p>
			</div>
		)
	}
}