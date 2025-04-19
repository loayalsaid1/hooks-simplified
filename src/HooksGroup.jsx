import React, { useState } from 'react'
import hooks from './Hooks';

export default function HooksGroup({title, hooksNames, setHookName, setHookData, isCustom}) {
	const [activeHook, setActiveHook] = useState(null);

	const handleClick = (name) => {
		setHookName(name);
		setHookData(hooks[name]);
		setActiveHook(name);
	}

	return (
		<div className="hooks-group">
			<p className='subtitle'>{title}</p>
			<div className="hooks-buttons">
				{hooksNames.map((name, index) => {
					return (
						<button 
							key={index} 
							onClick={() => handleClick(name)}
							className={`${isCustom ? 'custom-hook-button' : 'hook-button'} ${activeHook === name ? 'active-hook' : ''}`}
						>
							{name}
						</button>
					);
				})}
			</div>
		</div>
	)
}
