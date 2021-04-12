import React from 'react';
import PropTypes from 'prop-types';

/** 
* PersonalStat component, contains personal statistics for certain points.
* props are icon (image), the statistic (number), and unit (string).
* The statistic is fetched from `http://localhost:3000/user/${userId}`. */
export default class PersonalStat extends React.Component {
	render() {
		return (
			<div className="personal-stat">
				<img className="personal-stat-icon" src={this.props.icon} alt='' />
				<div className="personal-stat-text">
					<p className="personal-stat-text-numbers">{this.props.data}{this.props.unit}</p>
					<p className="personal-stat-text-title">{this.props.name}</p>
				</div>
			</div>
		)
	}
}

PersonalStat.propTypes = {
  icon: PropTypes.node,
  data: PropTypes.number,
  unit: PropTypes.string
};