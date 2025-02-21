import React from 'react'
import useArray from './useArray.hook';


export default function Main() {
	const [testArray, testArrayActions] = useArray([
		1, 2, 3, 4, 5, 6, 7
	]);


	return (
		<>
		<div>Array : {testArray.join(', ')}</div>
		<button onClick={() => testArrayActions.push(8)}>Add 8 to the array</button>
		<button onClick={() => testArrayActions.unshift(0)}>Add 0 at to the start</button>
		<button onClick={() => testArrayActions.update(2, 1000)}>make 3rd element 1000</button>
		<button onClick={() => testArrayActions.remove(2)}>Remove 3rd element</button>
		<button onClick={() => testArrayActions.filter(x => x % 2 === 0)}>Remove odd numbers</button>
		<button onClick={() => testArrayActions.clear()}>clear numbers</button>
		<button onClick={() => testArrayActions.set(a => [...a, 1, 2, 3, 4, 5, 6, 7])}>add original numbers</button>
		</>
	)
}
