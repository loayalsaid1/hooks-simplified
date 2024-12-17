import React, { useContext, useState } from 'react';
import { ThemeContext } from './main';


export default function FunctionContextComponent() {
	const isDark = useContext(ThemeContext);

	const styles = {
		margin: '2rem',
		padding: '2rem',
		backgroundColor: isDark ? '#333' : '#ccc',
		color: isDark ? '#ccc' : '#333',
	}

	return <div style={styles}>Function Theme </div>
}
