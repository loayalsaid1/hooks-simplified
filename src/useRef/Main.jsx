import React, { useState } from 'react';


export default function Main() {
	const [name, setName] = useState('');
	
	return <>
		<input type="text" value={name} onChange={(event) => setName(event.target.value)} />
		<div> My name is: {name}</div>
	</>
}
