import { useEffect, useState} from 'react';


function getSavedValue(key, initialValue) {
	const value = localStorage.getItem(key);
	if (value) return JSON.parse(value);
	
	if (initialValue instanceof Function) return initialValue();
	return initialValue;
}

export default function useLocalStorage(key, initialValue) {
	const [value, setValue] = useState(() => {
		return getSavedValue(key, initialValue);
	});

	
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);


	return [value, setValue];
}
