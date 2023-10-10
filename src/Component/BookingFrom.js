import React, { useState } from 'react';
import Modal from 'react-modal';
import './BookingForm.css'; // Import the BookingForm.css file
import * as emailjs from 'emailjs-com'
function BookingForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    totalPersons: '',
    partyCategory: '', // Initialize partyCategory to an empty string
    date: '',
    contactNumber: '',
    email: '',
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Data={
      name:formData.name,
      totalPersons:formData.totalPersons,
      partyCategory:formData.partyCategory,
      date:formData.date,
      contactNumber:formData.contactNumber,
      email:formData.email,
    }
    const Service_id='service_pn1asyb';
    const Templet_id='template_r6ryu4g';
    const user_id='ph55__tWWJwdBD2b6';
    emailjs.send(Service_id,Templet_id,Data,user_id).then(
      function(response){
        alert('Booking Successful')
      },
      function(error){
        alert('Failed to Book')
      }
    )
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      contentLabel="Booking Form"
      className="modal"
      overlayClassName="overlay"
    >
      
      <form onSubmit={handleSubmit} className="form-container">
      <h2>Booking Form</h2>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter Your Name'
            className="input-field"
          />
        </div>
        <div>
          <input
            type="text"
            name="totalPersons"
            value={formData.totalPersons}
            onChange={handleChange}
            placeholder='Total Persons'
            className="input-field"
          />
        </div>
        <div>
          <select
            name="partyCategory"
            value={formData.partyCategory}
            onChange={handleChange}
            className="input-field1"
          >
            <option value="">Select a category</option>
            <option value="Birthday Parties">Birthday Parties</option>
            <option value="Bridal Showers">Bridal Showers</option>
            <option value="Wedding Anniversaries">Wedding Anniversaries</option>
            <option value="Corporate Events">Corporate Events</option>
            <option value="Baby Showers">Baby Showers</option>
            <option value="Kitty Parties">Kitty Parties</option>
            <option value="Seminars">Seminars</option>
            <option value="Bachelorette Parties">Bachelorette Parties</option>
          </select>
        </div>
        <div>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder='Contact Number'
            className="input-field"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            className="input-field" 
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <button onClick={props.onClose} className="close-button">Close</button>
    </Modal>
  );
}

export default BookingForm;
