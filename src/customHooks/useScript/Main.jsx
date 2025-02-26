import React from 'react'
import useScript from './useScript.hook';


export default function Main() {
	const {loading, error} = useScript(
		'https://code.jquery.com/jquery-3.6.0.min.js'
	);

	// Or course you just need a useEffect here to update the width on resize..
	// but Let's just focus on what we have here

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error</div>
	// The script is laoded dynamically in the global scope. so to
	// access $ you have to get it from window.. 
	// You can ignore This part for now.. Just see how you mign use an external script and
	// load it dynamically with the render of a component
	return <div>{window.$(window).width()}</div>
}
