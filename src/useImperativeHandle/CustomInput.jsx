import React from 'react'

export default function CustomInput({ style, ...props}) {
	return (
		<input 
			{...props}
			style={{
				padding: '.25rem',
				border: 'none',
				borderBottom: '.2rem solid black',
				borderBottomLeftRadius:'5px',
				borderBottomRightRadius: '5px',
				backgroundColor: 'lightpink',
				...style,
			}}
		/>

	)
}
