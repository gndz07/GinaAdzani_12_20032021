import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

export default class AverageStat extends React.Component {
	render() {
		return (
      <div id="average-stat">
      <h2 className="average-stat-label">Durée moyenne des sessions</h2>
			   <ResponsiveContainer width={'100%'} height={263}>
        		<LineChart width={500} height={300} data={this.props.data}
        		margin={{top: 80, right: 5, left: 5, bottom: 5}} >
          			<Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} type="category" ticks={['L', 'M', 'M', 'J', 'V', 'S', 'D']} tick={{ fill: 'white' }}/>
          			<Tooltip />
        		</LineChart>
      		</ResponsiveContainer>
      </div>
		)
	}
}