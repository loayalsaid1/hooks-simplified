import React, { useState, useTransition } from 'react'


export default function Main() {
	const [isPending, startTransition] = useTransition();
	const [text, setText] = useState('');
	const [list, setList] = useState([]);


	const handleChange = (e) => {
		setText(e.target.value);
		
		startTransition(() => {
			const temp = [];
			for ( let i = 0; i <15000; i++) {
			temp.push(e.target.value);
		}
		setList(temp);
		})
	}

	return (
		<>
		<input type='text' value={text} onChange={handleChange} />
		{
			isPending
			? 'Loading ... '
			: list.map((item, index) => <div key={index}>{item}</div>)
		}
		</>
	)
}
