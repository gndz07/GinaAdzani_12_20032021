import React from 'react';

export default class PersonalStat extends React.Component {
	render() {
		return (
			<div className="personal-stat">
				<img className="personal-stat-icon" src={this.props.icon} />
				<div className="personal-stat-text">
					<p className="personal-stat-text-numbers">{this.props.data}{this.props.unit}</p>
					<p className="personal-stat-text-title">{this.props.name}</p>
				</div>
			</div>
		)
	}
}