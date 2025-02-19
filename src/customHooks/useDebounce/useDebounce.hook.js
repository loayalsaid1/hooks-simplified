import { useEffect } from 'react';
import useTimeout from '../useTimeout/useTimeout.hook';


export default function useDebounce(callback, delay, resetDependencies) {
	const { reset, clear } = useTimeout(callback, delay);
	useEffect(reset, [...resetDependencies, reset]);
	useEffect(clear, [clear]);
}
