import useAsync from '../useAsync/useAsync.hook';

/**
 * We are loading something dynamically.. So, we make use of our useAsync..
 * to be able to detect loading status, error or eventually success in loading..
 *  so we go with what we need..
 */
export default function useScript(url) {
	return useAsync(() => {
		// We are creating the script and making it load..... 🔻
		const script = document.createElement('script');
		script.src = url;
		script.async = true;

		// And we will leave it load.. and just return a promise (useAsync, remember...)
		// Whitch will resolve or reject based on our script status and give us
		// what we need eventually 🎉🌱
		return new Promise((resolve, reject) => {
			script.onload = resolve;
			script.onerror = reject;
			document.body.appendChild(script);
		})
	}, [url]);
}
