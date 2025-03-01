import React, {useContext, useState} from 'react'
import useAsync from './customHooks/useAsync/useAsync.hook';
import { hookContext } from './MainHooksComponent'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";


export default function HookNotes() {
	const { hookName } = useContext(hookContext);
	const [isNotFound, setIsNotFound] = useState(false);
	const { loading, error, value: hookNotes} = useAsync(() => {
		return fetch(
			`https://raw.githubusercontent.com/loayalsaid1/hooks-simplified/master/src/notes/${hookName}.txt`
		).then(res => {
			if (res.ok) return res.text();
			if (res.status === 404) return setIsNotFound(true);
			return res.json().then(json => Promise.reject(json));
		})
	}, [hookName])

	return (
		<section id="notes">
			<h5  className='subtitle'>📝My own Small notes on <strong>{hookName}</strong></h5>
			<p>Kinda summary of how I think about the hook.. (Feel free to skip it if it confuses you)</p>
			{isNotFound ? (
				<p><small>(Either I didn't add the notes yet for {hookName}.. or I added comments to the code )</small></p>
			) : loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>Something went wrong when loading the notes</p>
			) : (
				<SyntaxHighlighter language="markdown" style={nightOwl}>
					{hookNotes}
				</SyntaxHighlighter>
			)}
		</section>
	)
}
