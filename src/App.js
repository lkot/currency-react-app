import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Coin from './components/Coin/Coin';

const API_LINK =
	'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

function App() {
	const [coins, setCoins] = useState([]);
	const [search, setSerach] = useState('');

	useEffect(() => {
		axios
			.get(API_LINK)
			.then((res) => {
				setCoins(res.data);
				// console.log(res.data)
			})
			.catch((err) => console.log(err));
	}, []);

	// Function awaiting for the change of text typed.
	const handleChange = (e) => {
		setSerach(e.target.value);
	};

	// Function that filters coins and display whatever we type in.
	const filteredCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className='coin-app'>
			<div className='coin-search'>
				<h1 className='coin-text'>Search for a crypto</h1>
				<form>
					<input
						type='text'
						placeholder='Search'
						className='coin-input'
						onChange={handleChange}
					/>
				</form>
			</div>
			{filteredCoins.map((coin) => {
				return (
					// Remember - in this API each currency has an id. If you do it with some other API - check if it has ids !!!
					<Coin
						key={coin.id}
						name={coin.name}
						image={coin.image}
						symbol={coin.symbol}
						marketcap={coin.market_cap}
						price={coin.current_price}
						priceChange={coin.price_change_percentage_24h}
						volume={coin.total_volume}
					></Coin>
				);
			})}
		</div>
	);
}

export default App;
