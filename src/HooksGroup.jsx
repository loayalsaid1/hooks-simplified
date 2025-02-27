import React from 'react'
import hooks from './Hooks';

export default function HooksGroup({title, hooksNames, setHookName, setIsCustomHook}) {

	const handleClick = (name) => {
		setHookName(name);
		setIsCustomHook(hooks[name].isCustomHook);
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
