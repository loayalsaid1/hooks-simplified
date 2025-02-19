import { useRef, useEffect } from 'react';


// 🔔🔔 This is good.. but to do it properly.. put the callback in a ref..
export default function useUpdateEffect(callback, dependencies) {
	const isFirstRenderRef = useRef(true);

	useEffect(() => {
		if (isFirstRenderRef.current) {
			isFirstRenderRef.current = false;
			return;
		}
		return callback();
	}, dependencies);
}

// 🔔🔔 ....like so... 👇👇👇🔻🔻🔻


// export default function useUpdateEffect(callback, ...dependencies) {
// 	const isFirstRenderRef = useRef(true);
// 	const callbackRef = useRef(callback);

// 	useEffect(() => {
// 		callbackRef.current = callback;
// 	}, [callback]);

// 	useEffect(() => {
// 		if (isFirstRenderRef.current) {
// 			isFirstRenderRef.current = false;
// 			return;
// 		}
// 		return callbackRef.current();
// 	}, [dependencies]);
// }
