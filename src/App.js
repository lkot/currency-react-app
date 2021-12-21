import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false


function App() {

	useEffect(() => {
		axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
		.then(res => {
			
		})
		.catch(err => console.log(err))
	})

	return (
		<div className='App'>
			<h1>Currency React App</h1>
      <p>This is initial commit.</p>
		</div>
	);
}

export default App;
