import React from 'react'
import hooks from './Hooks';

export default function HooksGroup({title, hooksNames, setHookName, setHookData}) {

	const handleClick = (name) => {
		setHookName(name);
		setHookData(hooks[name]);
	}

	return (
		<div>
			<p className='subtitle'>{title}</p>
			{hooksNames.map((name, index) => {
				return <button key={index} onClick={() => handleClick(name)}>{name}</button>
			})}
		</div>
	)
}
