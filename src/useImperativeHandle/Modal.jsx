import React, { useImperativeHandle, useRef } from 'react'

function Modal({isOpen, onClose}, ref) {
	const closeRef = useRef();
	const confirmRef = useRef();
	const denyRef = useRef();

	useImperativeHandle(ref, () => {
		return {
			focusCloseButton: () => closeRef.current.focus(),
			focusConfirmButton: () => confirmRef.current.focus(),
			focusDenyButton: () => denyRef.current.focus(),
		}
	}, []);

	if (!isOpen) return null;
	return (
		<div>
			<div className="header">
				<button ref={closeRef} onClick={onClose}>&times;</button>
				<h1>Title</h1>
			</div>
			<div className="body">
				<div>Do you confirm</div>
				<div className="buttons">
					<button ref={confirmRef}>Confirm</button>
					<button ref={denyRef}>Deny</button>
				</div>
			</div>
		</div>
	)
}

export default React.forwardRef(Modal);
