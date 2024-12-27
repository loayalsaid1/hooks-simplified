import React, { useDebugValue, useEffect } from 'react'

export default function useOnlineStatus() {
	const [onlineStatus, setOnlineStatus] = React.useState(navigator.onLine);

	useDebugValue(formatStatus(onlineStatus))
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

	return onlineStatus;
}

const formatStatus = (status) => {
	return status ? 'Yeah.. it\'s online' : 'Nope...🙄';
}
