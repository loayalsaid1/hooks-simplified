import React, { useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import { ThemeProvide, useUpdateTheme } from './ThemContext';

export default function Main() {
	const toggleTheme = useUpdateTheme();

	return (
		<ThemeProvide>
			<FunctionContextComponent />
		</ThemeProvide>
	)
}
