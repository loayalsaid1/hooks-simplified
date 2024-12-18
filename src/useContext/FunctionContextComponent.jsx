import React, { useContext, useState } from 'react';
import { ThemeContext, useTheme, useUpdateTheme } from './ThemContext';


export default function FunctionContextComponent() {
	const isDark = useTheme();
	const toggleTheme = useUpdateTheme();

	const styles = {
		margin: '2rem',
		padding: '2rem',
		backgroundColor: isDark ? '#333' : '#ccc',
		color: isDark ? '#ccc' : '#333',
	}

	return <>
	<button onClick={toggleTheme}> Toggle Theme </button>
	<div style={styles}>Function Theme </div>
	</>
}
