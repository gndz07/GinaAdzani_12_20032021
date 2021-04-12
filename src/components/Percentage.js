import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/** 
* Percentage components, showing the percentage of daily objective done.
* Graphic made with RadialBarChart from Recharts.
* props for this component is object of 'todayScore' fetched from the endpoint `http://localhost:3000/user/${userId}`.
*/
export default class Percentage extends React.Component {
	render() {
		const data = [{
			percentage: this.props.data.todayScore*100,
			fill: '#FF0000',
		}]
		
		return (
			<div id="today-percentage">
				<h2 className="percentage-title-text">Score</h2>
				<p className="percentage-text">{data[0].percentage}%
					<br />
					<span className="percentage-text-desc">de votre objectif</span>
				</p>
				<div className="inner-circle"></div>
				<ResponsiveContainer width="100%" height="100%">
					<RadialBarChart cx="50%" cy="55%" innerRadius="70%"
					outerRadius="80%" barSize={16} data={data} startAngle={90} endAngle={450} >
		      			<PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
		      			<RadialBar minAngle={15} dataKey="percentage" cornerRadius={50} />
		    		</RadialBarChart>
		    	</ResponsiveContainer>
			</div>
		)
	}
}

Percentage.propTypes = {
  data: PropTypes.object
};