import React, { useRef, useState } from 'react'
import CustomInput from './CustomInput';
import Modal from './Modal';

export default function Main() {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);


	return (
		<>
		<button onClick={openModal}>Show Modal</button>
		<Modal isOpen={isOpen} onClose={closeModal} />
		</>
	)
}
