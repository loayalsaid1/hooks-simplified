import React, { useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComponent';

export const ThemeContext = React.createContext();

export default function Main() {
	const [isDark, setIsDark] = useState(true);
	
	const toggleTheme = () => {
		setIsDark(currentValue => !currentValue );
	}

	return (
		<ThemeContext.Provider value={isDark}>
			<button onClick={toggleTheme}> Toggle Theme </button>
			<FunctionContextComponent />
			<ClassContextComponent />
		</ThemeContext.Provider>
	)
}
