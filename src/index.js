import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js'
import SideNav from './components/SideNav.js'
import UserPage from './pages/UserPage.js'
import './styles/header.css'
import './styles/side-nav.css'

ReactDOM.render(
  <React.StrictMode>
  	<Router>

	    <Header />

	    <Switch>
	    	<Route exact path='/' />
	    	<Route path='/user/:userId' component={UserPage} />
	    </Switch>

	    <SideNav />

	</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

