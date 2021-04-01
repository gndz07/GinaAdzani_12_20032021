import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default class Percentage extends React.Component {
	render() {
		const data = [{
			percentage: this.props.data.todayScore*100,
			fill: '#FF0000',
		}]
		
		return (
			<div id="today-percentage">
			<p className="percentage-text">{data[0].percentage}%
				<br />
				<span className="percentage-text-desc">de votre objectif</span>
			</p>
				<ResponsiveContainer width={'100%'} height={263}>

					<RadialBarChart cx="50%" cy="50%" innerRadius="80%"
					outerRadius="90%" barSize={16} data={data} startAngle={90} endAngle={450} >
	      				<PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
	      				<RadialBar minAngle={15} background clockWise dataKey="percentage" cornerRadius={50} />

	    			</RadialBarChart>
	    		</ResponsiveContainer>
			</div>
		)
	}
}