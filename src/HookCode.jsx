import React, { useContext } from 'react'
import useFetch from './customHooks/useFetch/useFetch.hook';
import { hookContext } from './MainHooksComponent'
import SourceCodeFile from './SourceCodeFile';
import useUpdateEffect from './customHooks/useUpdateEffect/useUpdateEffect.hook';

export default function HookCode() {
	const { hookName, isCustomHook } = useContext(hookContext);
	const {error, loading, value: fileNames} = useFetch(
		`https://api.github.com/repos/loayalsaid1/hooks-simplified/contents/src/${
			isCustomHook ? 'customHooks/' : ''
		}${hookName}`,
		{},
		[hookName, isCustomHook],
	)

	useUpdateEffect(() => {
		if (!loading && !error && fileNames.length) {
			const index = fileNames.findIndex(file => file.name === "Main.jsx");
			if (index !== -1) {
				const mainFile = fileNames[index];
				fileNames.splice(index, 1);
				fileNames.unshift(mainFile);
			}
		}
	}, [fileNames])
	return (
		<section>
			<h5  className='subtitle'>👩‍💻 Hook Code</h5>
			<p>This is <strong>{hookName}</strong> hook. Your anchor is <em>Main.jsx</em></p>
			<div class="source-code">
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
			</div>

		</section>
	)
}
