import React from 'react';
import UserName from '../components/UserName.js'
import ActivityChart from '../components/ActivityChart.js'
import AverageStat from '../components/AverageStat.js'
import PersonalStat from '../components/PersonalStat.js'
import Performance from '../components/Performance.js'
import Percentage from '../components/Percentage.js'
import {userData, userActivity, userAverage, userPerformance} from '../mocks/user-data.js'
import caloriesIcon from '../assets/calories-icon.png'
import proteinIcon from '../assets/protein-icon.png'
import carbsIcon from '../assets/carbs-icon.png'
import fatIcon from '../assets/fat-icon.png'
import '../styles/containers.css'
import '../styles/user-name.css'
import '../styles/activity-chart.css'
import '../styles/average-stat.css'
import '../styles/performance.css'
import '../styles/percentage.css'
import '../styles/personal-stat.css'

export default class UserPage extends React.Component {
	constructor(props) {
    	super(props);
   		this.state = {
   			data: userData.find((user) => user.id == this.props.match.params.userId),
   			activity: userActivity.find((user) => user.userId == this.props.match.params.userId),
   			average: userAverage.find((user) => user.userId == this.props.match.params.userId),
   			performance: userPerformance.find((user) => user.userId == this.props.match.params.userId),
   		};
  	}

	render() {
		return (
			<div id="main">
				<UserName user={this.state.data.userInfos} />
				<div id="statistics-parent">
					<div id="graphics">
						<ActivityChart data={this.state.activity.sessions} />
						<div id="three-graphs-container">
							<AverageStat data={this.state.average.sessions} />
							<Performance data={this.state.performance.data} />
							<Percentage data={this.state.data} />
						</div>
					</div>

					<div id="stat-container">
						<PersonalStat name="Calories" icon={caloriesIcon} data={this.state.data.keyData.calorieCount} unit="kCal"/>
						<PersonalStat name="Proteines" icon={proteinIcon} data={this.state.data.keyData.proteinCount} unit="g"/>
						<PersonalStat name="Glucides" icon={carbsIcon} data={this.state.data.keyData.carbohydrateCount} unit="g"/>
						<PersonalStat name="Lipides" icon={fatIcon} data={this.state.data.keyData.lipidCount} unit="g"/>
					</div>
				</div>
			</div>
		)
	}
}