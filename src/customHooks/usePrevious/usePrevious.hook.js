import { useRef } from 'react';

// This is the more streightforward way
export default function usePrevious(value) {
	const currentRef = useRef(value);
	const prevRef = useRef();

	if (value !== currentRef.current) {
		prevRef.current = currentRef.current;
		currentRef.current = value;
	}

	return prevRef.current;
}



/**
 * 🔔🔔🔔 The secret why this custom hook  works and not return teh current state.. is that 
 * Use effect runs after the render
*/
// import { useRef, useEffect } from 'react';

// function usePrevious(value) {
//   const ref = useRef();

//   useEffect(() => {
//     ref.current = value;
//   }, [value]);

//   return ref.current;
// }

// export default usePrevious;
