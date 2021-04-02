import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

export default class Performance extends React.Component {
	render () {
		const data = this.props.data;
		const newData = data.map(datum => {
			switch (datum.kind) {
				case 1:
					return ({type: "Cardio", ...datum});
					break;
				case 2:
					return ({type: "Energie", ...datum});
					break;
				case 3:
					return ({type: "Endurance", ...datum});
					break;
				case 4:
					return ({type: "Force", ...datum});
					break;
				case 5:
					return ({type: "Vitesse", ...datum});
					break;
				case 6:
					return ({type: "Intensité", ...datum});
					break;
			}
		})

		return (
			<div id="performance">
				<ResponsiveContainer width="100%" height="100%">
			        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={newData}
			        margin={{top: 5, right: 5, left: 5, bottom: 5}}>
			          <PolarGrid />
			          <PolarAngleAxis dataKey="type" tick={{fill: 'white', fontSize: '12px'}} />
			          <PolarRadiusAxis tick={false} />
			          <Radar dataKey="value" stroke="#8884d8" fill="#FF0000" fillOpacity={0.6} />
			        </RadarChart>
		      	</ResponsiveContainer>
			</div>
		)
	}
}

Performance.propTypes = {
  data: PropTypes.array
};