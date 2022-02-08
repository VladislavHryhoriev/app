import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ProfileWrapper from './components/ProfileWrapper/ProfileWrapper'

let App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<ProfileWrapper />
		</div>
	);
}

export default App;
