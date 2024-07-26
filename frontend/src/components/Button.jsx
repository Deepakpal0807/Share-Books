// Button.js
import React, { useState } from 'react';
import Modal from './Modal.jsx'
import '../App.css';

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className='btn01' onClick={openModal}>Get Started</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Login/Sign Up Modal"
      >
        {/* Your login/sign up form components go here */}
        <button className='btn01' style={{color:'red'}} onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Button;
