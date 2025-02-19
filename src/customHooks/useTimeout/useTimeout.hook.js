import { useRef, useEffect, useCallback } from 'react';


export default function useTimout(callback, delay) {
	const callbackRef = useRef(callback);
	const timoutRef = useRef();

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback])

	const set = useCallback(() => {
		timoutRef.current = setTimeout(callbackRef.current, delay);
	}, [delay]);

	const clear = useCallback(() => {
		timoutRef.current && clearTimeout(timoutRef.current);
	}, []);

	const reset = useCallback(() => {
		clear();
		set();
	}, [clear, set]);

	// The main logic
	useEffect(() => {
		set();
		return clear;
	}, [delay, set, clear]);

	return { reset, clear };
}
