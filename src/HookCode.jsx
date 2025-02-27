import React, { useContext } from 'react'
import { hookContext } from './MainHooksComponent'

export default function HookCode() {
	const hookName = useContext(hookContext);

	return (
		<section>
			<h5  className='subtitle'>👩‍💻 Hook Code</h5>
			<p>This is <strong>{hookName}</strong> hook, Code will be added when internet gets back (Hopefully 😉)</p>
		</section>
	)
}
