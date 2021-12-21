import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
	const [coins, setCoins] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
			)
			.then((res) => {
				setCoins(res.data);
				// console.log(res.data)
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='coin-app'>
			<div className='coin-search'>
			<h1 className='coin-text'>Search a currency</h1>
			<form>
				<input type='text' placeholder='Search' className='coin-input' />
			</form>
			</div>
			
		</div>

	);
}

export default App;
