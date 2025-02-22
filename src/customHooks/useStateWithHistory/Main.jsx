import React from 'react'
import useStateWithHistory from './useStateWithHistory.hook';

export default function Main() {
	const [count, setCount, {history, pointer, back, forward, go}] = useStateWithHistory(0);
	return (
		<div>
			<p>Count: {count}</p>
			<p>history: {history.join(", ")}</p>
			<p>Pointer: {pointer}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
			<button onClick={back}>Back</button>
			<button onClick={forward}>Forward</button>
			<button onClick={() => go(3)}>Go to 3</button>
			<ul>
			</ul>
		</div>
	)
}
