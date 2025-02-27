import React, { useContext } from 'react'
import { hookContext } from './MainHooksComponent'
import HookDemo from './HookDemo';
import HookCode from './HookCode';
import HookNotes from './HookNotes';
import HookVideo from './HookVideo';


export default function Hook() {
	const { hookName } = useContext(hookContext);
	
	return (
		<div>
			<h1>{hookName}</h1>
			<HookDemo />
			<HookNotes />
			<HookCode />
			<HookVideo />
		</div>
	)
}
