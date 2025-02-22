import { useState, useRef, useCallback } from 'react';

export default function useStateWithHistory(initialState, {capacity = 10} = {}) {
	const [value, setValue] = useState(initialState);
	const historyRef = useRef([value]);
	const pointerRef = useRef(0);


	const set = useCallback((input) => {
		/**
		 * get the resolved value.. and manage teh history as follows....
		 * - add the new value to to the histyr
		 * - 	withine the range of the capasity
		 * - if the pointer not at the end.. clear the history after the pointer
		 * - move the pointer to the end
		 */
		const resolvedValue = typeof input === 'function' ? input(value) : input;
		// if (pointerRef.current < historyRef.current.length - 1)
		// 	historyRef.current = historyRef.current.slice(0, pointerRef.current + 1);

		// Make sure there is always a room for the new value in the history
		// 🎉👏 Thats for me.. I like this line.
		historyRef.current = historyRef.current.slice(-capacity + 1, pointerRef.current + 1);
		historyRef.current.push(resolvedValue);
		historyRef.current.length < capacity && pointerRef.current++;
		
		// historyLength = historyRef.current.length;
		// if (historyLength > capacity) historyRef.current = 

		setValue(resolvedValue);
	}, [capacity, value])

	const back = useCallback(() => {
		/**
		 * change the current value to the previous in the history 
		 * and change the ppointer.. of course if there is a room for this..
		 */
		if (pointerRef.current > 0) {
			pointerRef.current--;
			setValue(historyRef.current[pointerRef.current]);
		}
	}, []);

	const forward = useCallback(() => {
		/**
		 * Move th pointer index and the current vlaue.. one step forwared in the
		 * history if there is room for this
		 */
		if (pointerRef.current < historyRef.current.length - 1) {
			pointerRef.current++;
			setValue(historyRef.current[pointerRef.current]);
		}
	}, [])

	const go = useCallback((index) => {
		/**
		 * move the pointer and the current value to the given index
		 * if such index exists..
		 */
		const historyLength = historyRef.current.length;
		if (index >= 0 && index < historyLength) {
			pointerRef.current = index;
			setValue(historyRef.current[index]);
		}
	}, [])

	return [value, set, {history: historyRef.current, pointer: pointerRef.current, back, forward, go}];
}
