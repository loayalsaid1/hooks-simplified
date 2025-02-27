import React, { useContext } from 'react'
import { hookContext } from './MainHooksComponent'
import hooks from './Hooks'

export default function HookDemo() {
	const { hookName } = useContext(hookContext);
	const Main = hooks[hookName].main;

	return (
		<section style={{border: '1px solid wheat', padding: '1rem', marginBlock: '1rem'}}>
			<h5 className='subtitle'>🛠<strong>{hookName}</strong> Demo</h5>
			<Main />
		</section>		
	)
}
