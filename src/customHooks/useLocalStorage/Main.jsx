import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage.hook';

export default function Main() {
	const [value, setValue] = useLocalStorage('inputValue', '');

	return (
		<input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
	)
}
