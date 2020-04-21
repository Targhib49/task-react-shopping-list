import React from 'react';
import './App.scss';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
	return (
		<div className="App">
			<Header />
			{/* <Body /> */}
			{/* <Register /> */}
			<Login />
		</div>
	);
}

export default App;
