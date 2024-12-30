import React from 'react'

export default function Modal({isOpen, onClose}) {

	if (!isOpen) return null;
	return (
		<div>
			<div className="header">
				<button onClick={onClose}>&times;</button>
				<h1>Title</h1>
			</div>
			<div className="body">
				<div>Do you confirm</div>
				<div className="buttons">
					<button>Confirm</button>
					<button>Deny</button>
				</div>
			</div>
		</div>
	)
}
