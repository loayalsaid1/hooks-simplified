import React from 'react';
import useAsync from './customHooks/useAsync/useAsync.hook';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SourceCodeFile({ fileName, downloadUrl }) {
  const { loading, error, value } = useAsync(() => {
    return fetch(downloadUrl).then((res) => {
      if (res.ok) return res.text();
      return res.json().then((json) => Promise.reject(json));
    });
  }, [fileName, downloadUrl]);


  return (
    <div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{JSON.stringify(error)}</div>
      ) : (<>
				<span>{fileName}</span>
        <SyntaxHighlighter language="jsx" style={atomDark}>
          {value}
        </SyntaxHighlighter>
				</>
      )}
    </div>
  );
}
