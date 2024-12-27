import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function Main() {
	const [showItem, setshowItem] = useState(false);
	const button = useRef(null);
	const item = useRef(null);

	/**
	 * This will not show the popup at the specified position.. then
	 * run the effect so the screen flickers and changes teh position..
	 * no.. it will run it before the screen is painted.. 
	 * Mostly.. using useEffect will work.. but if not and the change is noticable.
	 * then use useLayoutEffect..
	 */
	useLayoutEffect(() => {
		if (showItem) {
			const { height } = button.current.getBoundingClientRect();
			item.current.style.top = `${height + 20}px`;
		}
	}, [showItem]);

	return (
		<>
		<button ref={button} onClick={() => setshowItem(prev => !prev)}>Show Item</button>
		{
			showItem &&
			<div ref={item} style={{position: 'absolute', top: '150px'}}>
				Hi.. I'm a pop up
			</div>
		}
		</>
	)

}
