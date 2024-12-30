import React, { useRef, useState } from 'react'
import CustomInput from './CustomInput';

export default function Main() {
	const [value, setValue] = useState('');
	const inputRef = useRef(null);

	return (
		<>
		<input type="text" value={value} onChange={(e) => setValue(e.target.value)} ref={inputRef} />
		<button onClick={() => inputRef.current.focus()}>Focus</button>
		</>
	)
}
