import React, { useState } from 'react'
import useAsync from './useAsync.hook';


export default function Main() {
	const [shouldSucceed, setShouldSucceed] = useState(true);

	const {loading, value, error} = useAsync(() => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				shouldSucceed ? resolve('Hi') : reject('Error');
w			}, 1000)
		})
	}, [shouldSucceed]);

	return (
		<div>
			<div>Loading: {loading.toString()}</div>
			<div>{error}</div>
			<div>{value}</div>
			<br />
			<br />
			<button onClick={() => setShouldSucceed(true)}>ShouldSucced - True</button>
			<button onClick={() => setShouldSucceed(false)}>ShouldSucced - False</button>
		</div>
	)
}
