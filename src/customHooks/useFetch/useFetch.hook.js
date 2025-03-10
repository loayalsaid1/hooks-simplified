import useAsync from '../useAsync/useAsync.hook.js';


const DEFAULT_OPTIONS = {
	'Content-Type': 'application/json',
}

export default function useFetch(url, options = {}, dependencies = []) {
	return useAsync(() => {
		return fetch(url, {...DEFAULT_OPTIONS, ...options})
			.then(res => {
				if (res.ok) return res.json();
				return res.json().then(json => Promise.reject(json));
			})
	}, dependencies);
}
