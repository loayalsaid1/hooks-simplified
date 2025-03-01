import React, { useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import { ThemeProvide,  } from './ThemContext';


export default function Main() {

	return (
		<ThemeProvide>
			<FunctionContextComponent />
		</ThemeProvide>
	)
}

