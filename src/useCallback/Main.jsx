import React, { useState, useCallback } from 'react';
import List from './List';


export default function Main() {
	const [number, setNumber] = useState(1);
	const [isDark, setIsDark] = useState(false)

	const theme = {
		backgroundColor: isDark ? '#333' : '#CCC',
		color: isDark ? '#CCC' : '#333',
	}

	const getItems = useCallback((added) => {
		return [number + added, number ** 2 + added, number ** 3 + added];
	}, [number]);

	return (
		<div style={theme}>
			<input
				type='number'
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
				/>
			<button onClick={() => setIsDark(prevValue => !prevValue)}>
				ToggleTheme
			</button>
			<List getItems={getItems} />
		</div>
	)

}
