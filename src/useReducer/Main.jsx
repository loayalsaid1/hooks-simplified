import React, { useReducer } from 'react';

const actions = {
	DECREMENT: 'decrement',
	INCREMENT: 'increment',	
}
ظ
function reducer (state, action) {
	switch (action.type) {
		case actions.INCREMENT:
			return { count: state.count + 1 }
		case actions.DECREMENT:
			return { count: state.count - 1 }
		default:
			return state
	}
}


/**
 * tHERE IS ALSO THE TODO LIST EXAMPLE
 * BUT SINSE I KNOW REDUX BY HEART.. i DONT' NEED TO
 * PLAY AROUND WITH THIS EXAMPLE TOO 
 */
export default function Main() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	const decrement = () => dispatch(
			{ type: actions.DECREMENT }
		);
	const increment = () => dispatch(
			{ type: actions.INCREMENT }
		);

	return (
		<div>
			<button onClick={decrement}> - </button>
			{state.count}
			<button onClick={increment}> + </button>
		</div>
	)
}
