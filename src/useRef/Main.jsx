import React, { useEffect, useRef, useState } from 'react';


export default function Main() {
	const [name, setName] = useState('');
	const inputRef = useRef();

	const focusInput = () => {
		inputRef.current.focus();
	}
	
	return <>
		<input ref={inputRef} type="text" value={name} onChange={(event) => setName(event.target.value)} />
		<div> My name is: {name}</div>
		<button onClick={focusInput} >Focus</button>
	</>
}
