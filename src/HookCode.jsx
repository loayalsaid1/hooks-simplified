import React, { useContext } from 'react'
import { hookContext } from './MainHooksComponent'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = `

import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HookCode = ({ hookName }) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!hookName) return;
}))
	
`
export default function HookCode() {
	const hookName = useContext(hookContext);

	return (
		<section>
			<h5  className='subtitle'>👩‍💻 Hook Code</h5>
			<p>This is <strong>{hookName}</strong> hook, Code will be added when internet gets back (Hopefully 😉)</p>

			<SyntaxHighlighter
				language="jsx"
				style={atomDark}
			>
				{code}
			</SyntaxHighlighter>
		</section>
	)
}
