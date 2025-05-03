import React, { useState } from 'react';
import '../styles/bookingform.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    poojaType: '',
    date: '',
    time: '',
    location: '',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="booking-success">
        <h3>Thank you for your booking request!</h3>
        <p>We have received your details and one of our team members will contact you shortly to confirm the arrangements.</p>
        <p>Booking Reference: VP-{Math.floor(Math.random() * 10000)}</p>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Book a Pooja</h3>
      
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="poojaType">Type of Pooja/Homa</label>
        <select 
          id="poojaType" 
          name="poojaType" 
          value={formData.poojaType} 
          onChange={handleChange} 
          required
        >
          <option value="">Select a Pooja</option>
          <option value="Ganapathi Homam">Ganapathi Homam</option>
          <option value="Satyanarayana Pooja">Satyanarayana Pooja</option>
          <option value="Navagraha Homam">Navagraha Homam</option>
          <option value="Wedding Ceremony">Wedding Ceremony</option>
          <option value="House Warming">House Warming</option>
          <option value="Other">Other (Specify in requests)</option>
        </select>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="time">Preferred Time</label>
          <input 
            type="time" 
            id="time" 
            name="time" 
            value={formData.time} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input 
          type="text" 
          id="location" 
          name="location" 
          value={formData.location} 
          onChange={handleChange} 
          required 
          placeholder="Full address where the pooja will be performed"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="specialRequests">Special Requests</label>
        <textarea 
          id="specialRequests" 
          name="specialRequests" 
          value={formData.specialRequests} 
          onChange={handleChange} 
          rows="4"
        />
      </div>
      
      <button type="submit" className="submit-btn">Submit Booking</button>
    </form>
  );
};

export default BookingForm;