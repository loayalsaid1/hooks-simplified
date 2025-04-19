import React, { useContext } from 'react'
import { hookContext } from './MainHooksComponent'
import HookDemo from './HookDemo';
import HookCode from './HookCode';
import HookNotes from './HookNotes';
import HookVideo from './HookVideo';


export default function Hook() {
	const { hookName } = useContext(hookContext);
	
	return (
		<div className="hook-details">
			<h1>{hookName}</h1>
			<nav className="buttons">
				<button><a href="#demo">🛠 Demo</a></button>
				<button><a href="#code">👩‍💻 Code</a></button>
				<button><a href="#notes">📝 Notes</a></button>
				<button><a href="#video">📺 Video</a></button>
			</nav>
			<HookDemo />
			<HookCode />
			<HookNotes />
			<HookVideo />
		</div>
	)
}
