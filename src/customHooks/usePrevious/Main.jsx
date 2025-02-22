import React, { useState } from 'react'

export default function Main() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('Loay');
	// THis will be changed
	const prevCount = 0;

	return (
		<>
			<div>{count} - {prevCount}</div>
			<span>{name}</span>
			<button onClick={() => setCount(count => count + 1)}>Increment</button>
			<button onClick={() => setName("Kyle")}>Change name</button>
		</>
	)
}
