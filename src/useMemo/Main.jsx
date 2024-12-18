import React, { useState, useEffect, useMemo } from 'react';


export default function Main() {
	const [number, setNumber] = useState(0);
	const [isDark, setIsDark] = useState(true);
	const doubleNumber = useMemo(() => {
		return doubleNumberSlowly(number);
	}, [number]);

	
	const theme = useMemo(() => {
		return {
			color: isDark? '#ccc' : '#333',
			backgroundColor: isDark? '#333' : '#ccc',
		}
	}, [isDark])

	useEffect(() => {
		console.log('themeChanged');
	}, [theme])

	return (
		<>
			<input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
			<button onClick={() => setIsDark(currentValue => !currentValue)}>Toggle theme</button>
			<div style={theme}>Double number: {doubleNumber}</div>
		</>
	)
}


function doubleNumberSlowly(number) {
	for (let i = 0; i < 1000000000; i++) {}
	return number * 2;
}
