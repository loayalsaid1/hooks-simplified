import React, { useEffect, useRef, useState } from 'react';


export default function Main() {
	const [name, setName] = useState('');
	const prevName = useRef('');

	useEffect(() => {
		prevName.current = name;
	})

	return <>
		<input type="text" value={name} onChange={(event) => setName(event.target.value)} />
		<div> My name is: {name} and it used to be { prevName.current}</div>
	</>
}
