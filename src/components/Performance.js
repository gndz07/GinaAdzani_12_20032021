import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/** 
* Performance component, contains information about user's performance score in 6 categories.
* props of this element is array of objects fetched from `http://localhost:3000/user/${userId}/performance`.
* Kind of performance from the database has to changed into the corresponding type of performance score.
* Graphic made using Rechart's RadarChart.
*/

export default class Performance extends React.Component {
	render () {
		const data = this.props.data;
		/** Convert numerical kind of activity into descriptive type that will be used as the labels */
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
				default:
					return({...datum});
			}
		})

		return (
			<div id="performance">
				<ResponsiveContainer width="100%" height="100%">
			        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={newData}
			        margin={{top: 5, right: 20, left: 0, bottom: 5}}>
			          <PolarGrid />
			          <PolarAngleAxis dataKey="type" tick={{fill: 'white', fontSize: '10px'}} tickLine={false} />
			          <PolarRadiusAxis axisLine={false} tick={false} />
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