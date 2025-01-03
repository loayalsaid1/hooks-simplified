import { useState } from 'react';

export default function useToggle(defaultValue = false) {
	const [value, setValue] = useState(defaultValue);

	function toggleValue(value) {
		setValue(currentValue => {
			return typeof value === 'boolean' ? value : !currentValue;
		})
	}

	return [value, toggleValue];
}
