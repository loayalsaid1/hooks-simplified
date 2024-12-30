import React, { useRef, useState } from 'react'
import CustomInput from './CustomInput';
import Modal from './Modal';

export default function Main() {
	const [isOpen, setIsOpen] = useState(false);
	const modalRef = useRef();

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);


	return (
		<>
		<button onClick={openModal}>Show Modal</button>
		<button onClick={() => modalRef.current.focusCloseButton()}>Focus Close</button>
		<button onClick={() => modalRef.current.focusConfirmButton()}>Focus Confirm</button>
		<button onClick={() => modalRef.current.focusDenyButton()}>Focus Deny</button>
		<Modal isOpen={isOpen} onClose={closeModal} ref={modalRef}/>
		</>
	)
}
