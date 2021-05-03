import React from 'react';
import { fetchData } from '../services/fetch.js';
import UserName from '../components/UserName.js';
import ActivityChart from '../components/ActivityChart.js';
import AverageStat from '../components/AverageStat.js';
import PersonalStat from '../components/PersonalStat.js';
import Performance from '../components/Performance.js';
import Percentage from '../components/Percentage.js';
import caloriesIcon from '../assets/calories-icon.png';
import proteinIcon from '../assets/protein-icon.png';
import carbsIcon from '../assets/carbs-icon.png';
import fatIcon from '../assets/fat-icon.png';
import '../styles/containers.css';
import '../styles/user-name.css';
import '../styles/activity-chart.css';
import '../styles/average-stat.css';
import '../styles/performance.css';
import '../styles/percentage.css';
import '../styles/personal-stat.css';

/**
* UserPage component.
* Displaying user's dashboard.
* Initial state condition is empty, fill with data fetched from the backend.
*/
export default class UserPage extends React.Component {
	constructor(props) {
    	super(props);
   		this.state = {
   			error: null,
   			dataLoaded: false,
   			data: [],
   			activityLoaded: false,
   			activity: [],
   			averageLoaded: false,
   			average: [],
   			performanceLoaded: false,
   			performance: []
   		};
  	}

  	/**
  	* Wait until all components mounted to call the API.
  	* Look for user ID match, between the URL param and ID on the database.
  	* Fetch data with the matching ID.
  	* @async
  	*/
  	componentDidMount() {
  		const userId = this.props.match.params.userId;

  		//fetch user's data
  		fetchData(userId, "")
  		.then(data => {
  			this.setState({
  				dataLoaded: true,
  				data: data
  			})
  		})

  		//fetch user's activity statistics
  		fetchData(userId, "activity")
  		.then(data => {
  			this.setState({
  				activityLoaded: true,
  				activity: data
  			})
  		})

  		//fetch user's average statistics
  		fetchData(userId, "average-sessions")
  		.then(data => {
  			this.setState({
  				averageLoaded: true,
  				average: data
  			})
  		})

  		//fetch user's performance statistics
  		fetchData(userId, "performance")
  		.then(data => {
  			this.setState({
  				performanceLoaded: true,
  				performance: data
  			})
  		})
  	}

	render() {
		/** 
		* take error and isLoaded status from the current state */
		const {error} = this.state;
		/** 
		* if error condition is true, show error page */
		if (error) {
			return <div>Error loading page</div>
		}
		/** 
		* if all API returned OK, render the full content. Add props for each corresponding components from the current state */
		else {
			return (
				<div id="main">
					{ this.state.dataLoaded ? <UserName user={this.state.data.userInfos} /> : "" }
					<div id="statistics-parent">
						<div id="graphics">
							{ this.state.activityLoaded ? <ActivityChart data={this.state.activity.sessions} /> : "" }
							<div id="three-graphs-container">
								{ this.state.averageLoaded ? <AverageStat data={this.state.average.sessions} /> : "" }
								{ this.state.performanceLoaded ? <Performance data={this.state.performance.data} /> : "" }
								{ this.state.dataLoaded ? <Percentage data={this.state.data} /> : "" }
							</div>
						</div>

						<div id="stat-container">
							{ this.state.dataLoaded ? 
								<PersonalStat name="Calories" icon={caloriesIcon} data={this.state.data.keyData.calorieCount} unit="kCal"/>
								 : "" }
							{ this.state.dataLoaded ? 
								<PersonalStat name="Proteines" icon={proteinIcon} data={this.state.data.keyData.proteinCount} unit="g"/>
								 : "" }
							{ this.state.dataLoaded ? 
								<PersonalStat name="Glucides" icon={carbsIcon} data={this.state.data.keyData.carbohydrateCount} unit="g"/>
								 : "" }
							{ this.state.dataLoaded ? 
								<PersonalStat name="Lipides" icon={fatIcon} data={this.state.data.keyData.lipidCount} unit="g"/>
								 : "" }

						</div>
					</div>
				</div>
			)
		}	
	}
}