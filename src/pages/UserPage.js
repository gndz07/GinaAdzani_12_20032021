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
   			error: null,
   			isLoaded: false,
   			data: [],
   			activity: [],
   			average: [],
   			performance: []
   		};
  	}

  	componentDidMount() {
  		const userId = this.props.match.params.userId;
  		Promise.all([
  			fetch(`http://localhost:3000/user/${userId}`),
  			fetch(`http://localhost:3000/user/${userId}/activity`),
  			fetch(`http://localhost:3000/user/${userId}/average-sessions`),
  			fetch(`http://localhost:3000/user/${userId}/performance`)
  		])
  		.then(([result1, result2, result3, result4]) => Promise.all(
  			[result1.json(), result2.json(), result3.json(), result4.json()]))
  		.then(
  			([data1, data2, data3, data4]) => {
	  			this.setState({
		  			isLoaded: true,
		  			data: data1,
		  			activity: data2,
		  			average: data3,
		  			performance: data4
	  			})
	  		},
	  		(error) => {
	  			this.setState({
	  				isLoaded: true,
	  				error
	  			})
	  		}
  		)
  	}

	render() {
		console.log(this.state);
		const {error, isLoaded} = this.state;
		if (error) {
			return <div>Error loading page</div>;
		}
		if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div id="main">
					<UserName user={this.state.data.data.userInfos} />
					<div id="statistics-parent">
						<div id="graphics">
							<ActivityChart data={this.state.activity.data.sessions} />
							<div id="three-graphs-container">
								<AverageStat data={this.state.average.data.sessions} />
								<Performance data={this.state.performance.data.data} />
								<Percentage data={this.state.data.data} />
							</div>
						</div>

						<div id="stat-container">
							<PersonalStat name="Calories" icon={caloriesIcon} data={this.state.data.data.keyData.calorieCount} unit="kCal"/>
							<PersonalStat name="Proteines" icon={proteinIcon} data={this.state.data.data.keyData.proteinCount} unit="g"/>
							<PersonalStat name="Glucides" icon={carbsIcon} data={this.state.data.data.keyData.carbohydrateCount} unit="g"/>
							<PersonalStat name="Lipides" icon={fatIcon} data={this.state.data.data.keyData.lipidCount} unit="g"/>
						</div>
					</div>
				</div>
			)
		}	
	}
}