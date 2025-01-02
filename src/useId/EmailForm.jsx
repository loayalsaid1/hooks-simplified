import React, { useId } from 'react'

export default function EmailForm() {
	// if to elemetns rendered in teh screen.. this means.. same Id will be used more that once..!
	// const uniqueIdPerComponent = useId();
	const id = useId();


	return (
		<>
		<label htmlFor={`email-${id}`}>Email: </label>
		<input id={`email-${id}`} type='text' />
		<br />
		<label htmlFor={`name-${id}`}>Name: </label>
		<input id={`name-${id}`} type='text' />
		</>
	)
}
