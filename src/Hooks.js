import useContextMain from './useContext/Main';
import useRefMain from './useRef/Main';
import useMemoMain from './useMemo/Main';
import useCallbackMain from './useCallback/Main';
import useReducerMain from './useReducer/Main';
import useTransitionMain from './useTransition/Main';
import useDeferredValueMain from './useDeferredValue/Main';
import useLayoutEffectMain from './useLayoutEffect/Main';
import useDebugValueMain from './useDebugValue/Main';
import useImperativeHandleMain from './useImperativeHandle/Main';
import useIdMain from './useId/Main';

import useLocalStorageMain from './customHooks/useLocalStorage/Main';
import useUpdateLoggerMain from './customHooks/useUpdateLogger/Main';
import useToggleMain from './customHooks/useToggle/Main';
import useTimeoutMain from './customHooks/useTimeout/Main';
import useDebounceMain from './customHooks/useDebounce/Main';
import useUpdateEffectMain from './customHooks/useUpdateEffect/Main';
import useArrayMain from './customHooks/useArray/Main';
import usePreviousMain from './customHooks/usePrevious/Main';
import useStateWithHistoryMain from './customHooks/useStateWithHistory/Main';
import useStorageMain from './customHooks/useStorage/Main';
import useAsyncMain from './customHooks/useAsync/Main';
import useFetchMain from './customHooks/useFetch/Main';
import useScriptMain from './customHooks/useScript/Main';

const hooks =  {
	useContext: {
		main: useContextMain,
		videoLink: "https://www.youtube.com/watch?v=5LrDIWkK_Bc",
		isCustomHook: false,
		documentation: 'https://react.dev/reference/react/useContext',
	},
	useRef: {
		main: useRefMain,
		videoLink: "https://www.youtube.com/watch?v=t2ypzz6gJm0",
		isCustomHook: false,
		documentation: 'https://react.dev/reference/react/useRef',
	},
	useMemo: {
		main: useMemoMain,
		videoLink: "https://www.youtube.com/watch?v=THL1OPn72vo",
		isCustomHook: false,
		documentation: 'https://react.dev/reference/react/useMemo',
	},
	useCallback: {
		main: useCallbackMain,
		videoLink: "https://www.youtube.com/watch?v=_AyFP5s69N4",
		isCustomHook: false,
		documentation: 'https://react.dev/reference/react/useCallback',
	},
	useReducer: {
		main: useReducerMain,
		videoLink: "https://www.youtube.com/watch?v=kK_Wqx3RnHk",
		isCustomHook: false,
		documentation: 'https://react.dev/reference/react/useReducer',
	},
	useTransition: {
		main: useTransitionMain,
		videoLink: "https://www.youtube.com/watch?v=N5R6NL3UE7I",
		isCustomHook: false,
		documentation: 'https://react.dev/reference/react/useTransition',
	},
	useDeferredValue: {
		main: useDeferredValueMain,
		videoLink: "https://www.youtube.com/watch?v=jCGMedd6IWA",
		isCustomHook: false,
		documentation: 'https://react.dev/reference/react/useDeferredValue',
	},
	useLayoutEffect: {
		main: useLayoutEffectMain,
		videoLink: "https://www.youtube.com/watch?v=wU57kvYOxT4",
		isCustomHook: false,
		documentation: 'https://react.dev/reference/react/useLayoutEffect',
	},
	useDebugValue: {
		main: useDebugValueMain,
		videoLink: "https://www.youtube.com/watch?v=pTF86K8JZBQ",
		isCustomHook: false,
		documentation: 'https://react.dev/reference/react/useDebugValue',
	},
	useImperativeHandle: {
		main: useImperativeHandleMain,
		videoLink: "https://www.youtube.com/watch?v=zpEyAOkytkU",
		isCustomHook: false,
		documentation: 'https://react.dev/reference/react/useImperativeHandle',
	},
	useId: {
		main: useIdMain,
		videoLink: "https://www.youtube.com/watch?v=_vwCKV7f_eA",
		isCustomHook: false,
		documentation: 'https://react.dev/reference/react/useId',
	},

	useLocalStorage: {
		main: useLocalStorageMain,
		videoLink: "https://www.youtube.com/watch?v=6ThXsUwLWvc",
		isCustomHook: true,
	},
	useUpdateLogger: {
		main: useUpdateLoggerMain,
		videoLink: "https://www.youtube.com/watch?v=6ThXsUwLWvc",
		isCustomHook: true,
	},
	useToggle: {
		main: useToggleMain,
		videoLink: "https://www.youtube.com/watch?v=0c6znExIqRw",
		isCustomHook: true,
	},
	useTimeout: {
		main: useTimeoutMain,
		videoLink: "https://www.youtube.com/watch?v=0c6znExIqRw",
		isCustomHook: true,
	},
	useDebounce: {
		main: useDebounceMain,
		videoLink: "https://www.youtube.com/watch?v=0c6znExIqRw",
		isCustomHook: true,
	},
	useUpdateEffect: {
		main: useUpdateEffectMain,
		videoLink: "https://www.youtube.com/watch?v=0c6znExIqRw",
		isCustomHook: true,
	},
	useArray: {
		main: useArrayMain,
		videoLink: "https://www.youtube.com/watch?v=0c6znExIqRw",
		isCustomHook: true,
	},
	usePrevious: {
		main: usePreviousMain,
		videoLink: "https://www.youtube.com/watch?v=vrIxu-kfAUo",
		isCustomHook: true,
	},
	useStateWithHistory: {
		main: useStateWithHistoryMain,
		videoLink: "https://www.youtube.com/watch?v=vrIxu-kfAUo",
		isCustomHook: true,
	},
	useStorage: {
		main: useStorageMain,
		videoLink: "https://www.youtube.com/watch?v=vrIxu-kfAUo",
		isCustomHook: true,
	},
	useAsync: {
		main: useAsyncMain,
		videoLink: "https://www.youtube.com/watch?v=vrIxu-kfAUo",
		isCustomHook: true,
	},
	useFetch: {
		main: useFetchMain,
		videoLink: "https://www.youtube.com/watch?v=vrIxu-kfAUo",
		isCustomHook: true,
	},
	useScript: {
		main: useScriptMain,
		videoLink: "https://www.youtube.com/watch?v=Ix_xeCuS4XA",
		isCustomHook: true,
	},
}


export default hooks;
