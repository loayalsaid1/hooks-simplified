import React, { useContext } from 'react'
import useFetch from './customHooks/useFetch/useFetch.hook';
import { hookContext } from './MainHooksComponent'
import SourceCodeFile from './SourceCodeFile';

export default function HookCode() {
	const { hookName, isCustomHook } = useContext(hookContext);
	const {error, loading, value: fileNames} = useFetch(
		`https://api.github.com/repos/loayalsaid1/hooks-simplified/contents/src/${
			isCustomHook ? 'customHooks/' : ''
		}${hookName}`,
		{},
		[hookName, isCustomHook],
	)

	return (
		<section>
			<h5  className='subtitle'>👩‍💻 Hook Code</h5>
			<p>This is <strong>{hookName}</strong> hook, Code will be added when internet gets back (Hopefully 😉)</p>
			{
				loading ? (
					<p>Loading...</p>
				) : (
					error ? (
					<p>Error Loading Files</p>
				) : (
					fileNames.map((fileName, index) => {
						return <SourceCodeFile key={index} fileName={fileName.name} downloadUrl={fileName.download_url} />
					})
				)
				)
			}
		</section>
	)
}
