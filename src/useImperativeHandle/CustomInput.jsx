import React, { useImperativeHandle } from 'react'

function CustomInput({ style, ...props}, ref) {

	useImperativeHandle(ref, () => {
		return {
			alertHi: () => alert('hi'),
			alertBye: () => alert('bye')
		}
	}, []);
	
	return (
		<input 
			ref={ref}
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

export default React.forwardRef(CustomInput)
