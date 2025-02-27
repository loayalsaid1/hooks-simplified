import React from 'react'

export default function HooksGroup({title, hooksNames, setHookName}) {
	return (
		<div>
			<p className='subtitle'>{title}</p>
			{hooksNames.map((name, index) => {
				return <button key={index} onClick={() => setHookName(name)}>{name}</button>
			})}
		</div>
	)
}
