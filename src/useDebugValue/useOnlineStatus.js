import React, { useDebugValue, useEffect } from 'react'

export default function useOnlineStatus() {
	const [onlineStatus, setOnlineStatus] = React.useState(navigator.onLine);

	const setOnline = () => setOnlineStatus(true);
	const setOffline = () => setOnlineStatus(false);

	useEffect(() => {

		window.addEventListener('online', setOnline);
		window.addEventListener('offline', setOffline)

		return () => {
			window.removeEventListener('online', setOnline);
			window.removeEventListener('offline', setOffline);
		};
	}, []);

	
	// Ok so far...
	// useDebugValue(formatStatus(onlineStatus))

	// This will block execution each time the hook runs.. 
	// useDebugValue(slowOperation(onlineStatus))

	// Not this will only run when the ReactDevTools is open and inspecting
	// The component... so it don't slow down things when using 
	// The app
	useDebugValue(onlineStatus, slowOperation)


	return onlineStatus;
}


const formatStatus = (status) => {
	return status ? 'Yeah.. it\'s online' : 'Nope...🙄';
}

const slowOperation = (status) => {
	for (let i = 0; i < 20000000; i++) {};
	return status ? 'Yeah.. it\'s online' : 'Nope...🙄';
}

