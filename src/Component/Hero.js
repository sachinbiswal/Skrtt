import React, { useState } from 'react';
import './Hero.css';
import Modal from 'react-modal'; 
import BookingForm from './BookingFrom';

function Hero() {
  const [isFormOpen, setFormOpen] = useState(false);

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <div id="hero">
      <div className='text'>
        <h1>Experience the Ultimate Romantic Dinner Cruise</h1>
        <h3>
          When every night is a <span style={{ color: "red" }}>candlelight dinner</span>,
          how could Feb. 14 <br /> only be our <span style={{ color: 'red' }}>Valentine's Day?</span>
        </h3>
        <button id="bookNowButton" className="btn" onClick={openForm}>
          Book Now
        </button>
      </div>

      <Modal
        isOpen={isFormOpen}
        onRequestClose={closeForm}
        contentLabel="Booking Form"
      >
        <BookingForm isOpen={isFormOpen} onClose={closeForm} />
      </Modal>
    </div>
  );
}

export default Hero;
