import React from 'react'
import useOnlineStatus from './useOnlineStatus';

export default function Main() {
	const online = useOnlineStatus();

	return <div>{online ? '✅ Online'  : '❌ Offline'}</div>
}
