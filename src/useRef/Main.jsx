import React, { useEffect, useRef, useState } from 'react';


export default function Main() {
	const [name, setName] = useState('');
	const renderCount = useRef(0);

	useEffect(() => {
		renderCount.current += 1;
	});

	return <>
		<input type="text" value={name} onChange={(event) => setName(event.target.value)} />
		<div> My name is: {name}</div>
		<div>I rendered { renderCount.current}</div>
	</>
}
