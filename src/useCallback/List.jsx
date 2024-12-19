import React, { useEffect, useState } from 'react';


export default function List({ getItems }) {
	const [items, setIems] = useState([]);
	
	useEffect(() => {
		setIems(getItems(12));
		console.log('getItems changed');
	}, [getItems])

	return items.map((item, index) => <div key={index}>{item}</div>)
}
