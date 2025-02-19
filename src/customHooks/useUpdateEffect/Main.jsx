import React, { useState, useEffect } from 'react'

export default function Main() {
	const [count, setCount] = useState(10);

	// This will run even at the first time.. where count never changed
	useEffect(() => alert(count), [count]);
	return (
		<>
		<p>{count}</p>
		{/* Stupid move I know */}
		<button onClick={() => setCount(count => count + 1)}><h5>Increment</h5></button>
		</>	)
}
