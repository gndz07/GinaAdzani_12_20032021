import React from 'react';
import UserName from '../components/UserName.js'
import ActivityChart from '../components/ActivityChart.js'
import AverageStat from '../components/AverageStat.js'
import PersonalStat from '../components/PersonalStat.js'
import Performance from '../components/Performance.js'
import Percentage from '../components/Percentage.js'
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
   			isLoaded: false,
   			data: [],
   			activity: [],
   			average: [],
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
  		Promise.all([
  			/** 
  			* API endpoint for user's basic data */
  			fetch(`http://localhost:3000/user/${userId}`),
  			/** 
  			* API endpoint for user's activities histories */
  			fetch(`http://localhost:3000/user/${userId}/activity`),
  			/** 
  			* API endpoint for user's daily average sessions*/
  			fetch(`http://localhost:3000/user/${userId}/average-sessions`),
  			/** 
  			* API endpoint for user's performance in each category */
  			fetch(`http://localhost:3000/user/${userId}/performance`)
  		])
  		/** 
  		* fetch the data and compile into json */
  		.then(([result1, result2, result3, result4]) => Promise.all(
  			[result1.json(), result2.json(), result3.json(), result4.json()]))
  		/** 
  		* use the fetched data to populate the initially empty array in the state using setState */
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
	  		/** 
	  		* if the API request get an error response, set the state into error condition */
	  		(error) => {
	  			this.setState({
	  				isLoaded: true,
	  				error
	  			})
	  		}
  		)
  	}

	render() {
		/** 
		* take error and isLoaded status from the current state */
		const {error, isLoaded} = this.state;
		/** 
		* if error condition is true, show error page */
		if (error) {
			return <div>Error loading page</div>
		}

		/** 
		* if page is still loading, show loading page */

		else if (!isLoaded) {
			return <div>Loading...</div>
		} 
		/** 
		* if all API returned OK, render the full content. Add props for each corresponding components from the current state */
		else {
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