import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/** @function CustomToolTip 
@param active - whether or not the tooltip is active
@param payload - the values in the object
@param label */
const CustomToolTip = ({ active, payload, label}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-average">
        <p className="custom-tooltip-average-text">{`${payload[0].value} min`}</p>
      </div>
    )
  }
  return null;
}

/** @constructor AverageStat */

export default class AverageStat extends React.Component {
	render() {
    /** @this AverageStat component */
    const data = this.props.data;
    /** Add days name that will be used as the X Axis labels */
    const newData = data.map(datum => {
      switch (datum.day) {
        case 1:
          return ({dayName: "L", ...datum});
          break;
        case 2:
          return ({dayName: "M", ...datum});
          break;
        case 3:
          return ({dayName: "M", ...datum});
          break;
        case 4:
          return ({dayName: "J", ...datum});
          break;
        case 5:
          return ({dayName: "V", ...datum});
          break;
        case 6:
          return ({dayName: "S", ...datum});
          break;
        case 7:
          return ({dayName: "D", ...datum});
          break;
        default:
          return({...datum});
      }
    })

		return (
      <div id="average-stat">
      <h2 className="average-stat-label">Durée moyenne des sessions</h2>
			   <ResponsiveContainer width={'100%'} height={263}>
        		<LineChart data={newData}
        		margin={{top: 80, right: 15, left: 15, bottom: 20}} >
          			<Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} />
                <XAxis dataKey="dayName" axisLine={false} tickLine={false} tick={{ fill: "white", dy: 20}} />
          			<Tooltip content={<CustomToolTip />} position={{ y: 60 }} />
        		</LineChart>
      		</ResponsiveContainer>
      </div>
		)
	}
}

AverageStat.propTypes = {
  data: PropTypes.array
};