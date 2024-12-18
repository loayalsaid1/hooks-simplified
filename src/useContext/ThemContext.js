import React , { Children, useContext, useState} from 'react';


export const ThemeContext = React.createContext();
export const ThemeUpdaterContext = React.createContext();

export function useTheme() {
	return [useContext(ThemeContext), useContext(ThemeUpdaterContext)];
}

export function ThemeProvide({ children}) {
	const [isDark, setIsDark] = useState(true);
	
	const toggleTheme = () => {
		setIsDark(currentValue => !currentValue );
	}

	return (
		<ThemeContext.Provider value={isDark}>
			<ThemeUpdaterContext.Provider value={toggleTheme}>
				{ children }
			</ThemeUpdaterContext.Provider>
		</ThemeContext.Provider>
	)
}
