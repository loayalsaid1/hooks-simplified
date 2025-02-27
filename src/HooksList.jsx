import React from 'react'
import HooksGroup from './HooksGroup'
import hooks from './Hooks';

export default function HooksList({ setHookName }) {
	const hooksNames = Object.keys(hooks);
	const reactHooksNames = hooksNames.filter(name => !hooks[name].isCustomHook);
	const customHooksNames = hooksNames.filter(name => hooks[name].isCustomHook);
	return (
		<div>
			<h3>Choose a hook</h3>
			<HooksGroup title="⚛ React Hooks" hooksNames={reactHooksNames} setHookName={setHookName} />
			<HooksGroup title="🧰 Custom Hooks" hooksNames={customHooksNames} setHookName={setHookName} />
		</div>
	)
}
