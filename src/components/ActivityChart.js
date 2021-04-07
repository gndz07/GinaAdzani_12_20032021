import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const CustomToolTip = ({ active, payload, label}) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<p className="custom-tooltip-text">{`${payload[0].value}kg`}</p>
				<p className="custom-tooltip-text">{`${payload[1].value}kCal`}</p>
			</div>
		)
	}
	return null;
};

{/** @constructor ActivityChart */}

export default class ActivityChart extends React.Component {

	render() {
		{/** @this ActivityChart component */}
		const data = this.props.data;
		{/** restructure the data object, add a number key with value of index+1. Will serve as X Axis labels */}
		const newData = data.map(datum => ({number: data.indexOf(datum)+1 ,...datum}));

		return (
			<div id="chart-parent">
			<h2 className="chart-title">Activité quotidienne</h2>
			<ResponsiveContainer width={'100%'} height={320}>
				<BarChart width={835} height={320} data={newData}
	      		margin={{top: 5, right: 30, left: 20, bottom: 40}}>
	      			{/** no vertical lines on the cartesian grid of the chart */}
	      			<CartesianGrid vertical={false} />
	      			<XAxis dataKey="number" />
	      			<YAxis orientation="right" tickCount={3}/>
	      			{/** Use the CustomToolTip as the tooltip's content */}
	      			<Tooltip content={<CustomToolTip />} position={{ y: 50 }} />
	      			<Legend verticalAlign="top" align="right" iconType="circle" iconSize="10"/>
	      			<Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={10} barGap={5} />
	      			<Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={10} barGap={5} />
	    		</BarChart>
	    		</ResponsiveContainer>
	    	</div>
		)
	}
}

ActivityChart.propTypes = {
	data: PropTypes.array
};