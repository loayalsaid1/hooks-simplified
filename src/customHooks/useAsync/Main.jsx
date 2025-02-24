import React, { useState } from 'react'

export default function Main() {
	const [shouldSucceed, setShouldSucceed] = useState(true);
	// const {loading, value, error} = useAsync(someAsyncLogic());
	const {loading, value, error} = {loading: false, value: 'Hi', error: null};

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
