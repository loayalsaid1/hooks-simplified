import React, { useState } from 'react'
import useDebounce from './useDebounce.hook';

export default function Main() {
	const [count, setCount] = useState(10);
	useDebounce(() => {
		alert(count);
	}, 1000, [count]);

	return (
		<>
		<p>{count}</p>
		{/* Stupid move I know */}
		<button onClick={() => setCount(count => count + 1)}><h5>Increment</h5></button>
		</>
	)
}
