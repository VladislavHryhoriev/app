import React from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ProfileWrapper from './components/ProfileWrapper/ProfileWrapper'

let App = (props) => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className="app-wrapper-content">
				<Routes>
					<Route path="/"
						element={
							<ProfileWrapper
								profilePage={props.state.profilePage}
								addPost={props.addPost}
								updateNewPostText={props.updateNewPostText}
							/>
						}
					/>
					<Route path="/dialogs"
						element={
							<Dialogs
								dialogsPage={props.state.dialogsPage}
							/>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
