import React from 'react';
import PropTypes from 'prop-types';

/** @constructor UserName */
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