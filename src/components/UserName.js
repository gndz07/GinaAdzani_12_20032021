import React from 'react';
import PropTypes from 'prop-types';

/** 
* UserName component, to show name of the user. 
* props is an object fetched from `http://localhost:3000/user/${userId}`.
*/
export default class UserName extends React.Component {
	render() {
		return (
			<div className="user-header">
				<h1 className="user-name">Bonjour <span className="user-header-name">{this.props.user.firstName}</span></h1>
				<p className="user-tagline">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</div>
		)
	}
}

UserName.propTypes = {
  user: PropTypes.object
};