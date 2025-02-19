import React, { useState, useRef, useEffect } from 'react'

export default function Main() {
	const [count, setCount] = useState(10);

	// So frustrating, right?
	const [changed, setChanged] = useState(false);
	useEffect(() => {
		if (!changed) {
			setChanged(true);
			return;
		}

		alert(count);
	}, [count])

	return (
		<>
		<p>{count}</p>
		{/* Stupid move I know */}
		<button onClick={() => setCount(count => count + 1)}><h5>Increment</h5></button>
		</>
	)
}
