import React, { useEffect } from 'react'

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

	return onlineStatus;
}
