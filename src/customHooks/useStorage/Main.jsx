import React, { useState } from 'react'

export default function Main() {
	const [name, setName] = useState('Lareen');
	const [age, setAge] = useState(10);
	
	return (
		<div>
			<div>{name} - {age}</div>
			<button onClick={() => setName("Kyle")}>Set name</button>
			<button onClick={() => setName("Kyle.. [not in the storage anymore]")}>Remove name</button>
			<button onClick={() => setAge("26")}>Set age</button>
			<button onClick={() => setAge("26.. [not in the storage anymore]")}>Remove age</button>
		</div>
	)
}
