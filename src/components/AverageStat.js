import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/** @function CustomToolTip 
* Function to create custom styled ToolTip for Rechart element.
* @param active - whether or not the tooltip is active
* @param payload - the values in the object
*/
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


/**
 * AverageStat component, showing a graphic of daily average activity.
 * Graphic made with Recharts LineChart.
 * Dayname must be added to each object, later will be used as label on the X axis.
 * Add two empty objects as the first and last index to make the chart line's overflowing the frame.
 * props of this component is an array of 'activity sessions' fetched from endpoint `http://localhost:3000/user/${userId}/average-sessions`.
*/


export default class AverageStat extends React.Component {
	render() {
    const data = this.props.data;

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

    const index0 = {
      day: 0,
      dayName: "",
      sessionLength: 0
    };

    const indexLast = {
      day: 8,
      dayName: "",
      sessionLength: 100
    }
    newData.unshift(index0);
    newData.push(indexLast);

		return (
      <div id="average-stat">
      <h2 className="average-stat-label">Durée moyenne des sessions</h2>
			   <ResponsiveContainer width="100%" height="100%">
        		<LineChart data={newData}
        		margin={{top: 80, right: -15, left: -15, bottom: 20}} >
          			<Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} 
                  activeDot={{ stroke: "#FF0000", r: 5}} />
                <XAxis dataKey="dayName" axisLine={false} tickLine={false} tick={{ fill: "white", fontSize: "12", dy: 20}} />
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