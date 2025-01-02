import React, { useId } from 'react'

export default function EmailForm() {
	// if to elemetns rendered in teh screen.. this means.. same Id will be used more that once..!
	const id = useId();

	return (
		<>
		<label htmlFor={id}>Email: </label>
		<input id={id} type='text' />
		</>
	)
}
