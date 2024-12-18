import React, { useState, useEffect, useMemo } from 'react';


export default function Main() {
	const [number, setNumber] = useState(0);
	const [isDark, setIsDark] = useState(true);
	const doubleNumber = useMemo(() => {
		return doubleNumberSlowly(number);
	}, [number]);

	const style = {
		color: isDark? '#ccc' : '#333',
		backgroundColor: isDark? '#333' : '#ccc',
	}

	return (
		<>
			<input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
			<button onClick={() => setIsDark(currentValue => !currentValue)}>Toggle Theme</button>
			<div style={style}>Double number: {doubleNumber}</div>
		</>
	)
}


function doubleNumberSlowly(number) {
	for (let i = 0; i < 1000000000; i++) {}
	return number * 2;
}
