import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js'
import SideNav from './components/SideNav.js'
import './styles/header.css'
import './styles/side-nav.css'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <SideNav />
  </React.StrictMode>,
  document.getElementById('root')
);

