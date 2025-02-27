import React, {useContext} from 'react'
import { hookContext } from './MainHooksComponent'
export default function HookNotes() {
	const hookName = useContext(hookContext);


	return (
		<section>
			<h5  className='subtitle'>📝My Small notes on <strong>{hookName}</strong> hook</h5>
			<p>For more comprehensive.. You will find a link to documentation and also an article about the video</p>

			<p>
				Here might go the text from my .txt file may be in a "pre" tag or something... or I might
				find a better way to do this..
			</p>
		</section>
	)
}
