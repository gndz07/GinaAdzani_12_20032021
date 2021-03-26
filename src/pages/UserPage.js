import React from 'react';
import UserName from '../components/UserName.js'
import {userData} from '../mocks/user-data.js'
import '../styles/user-name.css'

export default class UserPage extends React.Component {
	constructor(props) {
    	super(props);
   		this.state = {
   			item: userData.find((user) => user.id === 12),
   		};
  	}

	render() {
		console.log(this.props.match.params.userId)
		console.log(this.props)
		return (
			<div id="main">
				<UserName user={this.state.item} />
			</div>
		)
	}
}