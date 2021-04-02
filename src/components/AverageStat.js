import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import PropTypes from 'prop-types';

const customTick = ({x, y, payload}) => {
  let tick = '';
  switch (payload.value) {
    case 1:
      tick= 'L';
      break;
    case 2:
      tick= 'M';
      break;
    case 3:
      tick= 'M';
      break;
    case 4:
      tick= 'J';
      break;
    case 5:
      tick= 'V';
      break;
    case 6:
      tick= 'S';
      break;
    case 7:
      tick= 'D';
      break;
  }
  return (
    <p className="average-custom-tick">{tick}</p>
  )
}

export default class AverageStat extends React.Component {
	render() {
    const dotStyle = { stroke: '#FFFFFF' };
		return (
      <div id="average-stat">
      <h2 className="average-stat-label">Durée moyenne des sessions</h2>
			   <ResponsiveContainer width={'100%'} height={263}>
        		<LineChart width={500} height={300} data={this.props.data}
        		margin={{top: 80, right: 5, left: 5, bottom: 5}} >
          			<Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false}  />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={customTick}/>
          			<Tooltip />
        		</LineChart>
      		</ResponsiveContainer>
      </div>
		)
	}
}

AverageStat.propTypes = {
  data: PropTypes.array
};