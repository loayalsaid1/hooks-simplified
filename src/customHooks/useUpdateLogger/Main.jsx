import React, { useState } from 'react'
import useUpdateLogger from './useUpdateLogger.hook';

export default function Main() {
	const [value, setValue] = useState('inputValue');
	useUpdateLogger(value);

	return (
		<input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
	)
}
