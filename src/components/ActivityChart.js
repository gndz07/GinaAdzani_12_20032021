import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default class ActivityChart extends React.Component {

	render() {
		const data = this.props.data;
		const newData = data.map(datum => ({number: data.indexOf(datum)+1 ,...datum}));

		return (
			<div id="chart-parent">
			<h2 className="chart-title">Activité quotidienne</h2>
			<ResponsiveContainer width={'100%'} height={320}>
				<BarChart width={835} height={320} data={newData}
	      		margin={{top: 5, right: 30, left: 20, bottom: 5}}>
	      			<CartesianGrid vertical={false} />
	      			<XAxis dataKey="number" />
	      			<YAxis orientation="right" tickCount={3}/>
	      			<Tooltip />
	      			<Legend verticalAlign="top" align="right" iconType="circle" iconSize="10"/>
	      			<Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={10} barGap={5} />
	      			<Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={10} barGap={5} />
	    		</BarChart>
	    		</ResponsiveContainer>
	    	</div>
		)
	}
}