import React, { useDeferredValue, useEffect, useMemo } from 'react'

export default function List({ input }) {

	const deferredInput = useDeferredValue(input);

	const list = useMemo(() => {
		const l = [];
		for (let i = 0; i < 20000; i++) {
			l.push(deferredInput);
		}
		return l;
	}, [deferredInput])

	useEffect(() => {
		console.log(
			`input: ${input} \n deferredInput: ${deferredInput}`
		)
	}, [input, deferredInput])
	return list.map((item, index) => <div key={index}>{item}</div>)
}
