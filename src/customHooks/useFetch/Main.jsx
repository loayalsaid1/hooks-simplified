import React, { useState, useEffect } from 'react'

export default function Main() {
	const [id, setId] = useState(1);
	const [value, setValue] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					res.json().then(json => {
						throw new Error(json.message);
					})
				}
			})
			.then(data => setValue(data))
			.catch (error => setError(error))
			.finally(() => setLoading(false));
	}, [id]);

	return (
		<div>
			<div>{id}</div>
			<button onClick={() => setId(id => id + 1)}>Increment ID</button>
			<div>Loading: {loading.toString()}</div>
			<div>{JSON.stringify(error, null, 2)}</div>
			<div>{JSON.stringify(value, null, 2)}</div>
		</div>
	)
}
