// BookingForm.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [occasion, setOccasion] = useState('');
  const [numGuests, setNumGuests] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      valid = false;
    } else if (firstName.trim().length < 2) {
      newErrors.firstName = 'First name must contain at least 2 characters';
      valid = false;
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
      valid = false;
    } else if (lastName.trim().length < 2) {
      newErrors.lastName =
        'Last name must contain at least 2 characters';
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!occasion.trim()) {
      newErrors.occasion = 'Occasion is required';
      valid = false;
    }

    if (!selectedDate) {
      newErrors.date = 'Please select a date';
      valid = false;
    }

    if (!selectedTime) {
      newErrors.time = 'Please select a time';
      valid = false;
    }

    if (numGuests < 1 || numGuests > 10) {
      newErrors.numGuests = 'Guests must be between 1 and 10';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setOccasion('');
    setNumGuests(1);
    setSelectedDate('');
    setSelectedTime('');
    setErrors({});
    setEmailError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formData = {
      firstName,
      lastName,
      email,
      occasion,
      numGuests,
      selectedDate,
      selectedTime,
    };

    submitForm(formData);
    resetForm();
  };

  const today = new Date().toISOString().split('T')[0];

  const isFormValid =
  firstName.trim().length >= 2 &&
  lastName.trim().length >= 2 &&
  emailRegex.test(email) &&
  occasion.trim() !== '' &&
  selectedDate !== '' &&
  selectedTime !== '' &&
  numGuests >= 1 &&
  numGuests <= 10;

  return (
    <div className="reservation-form-wrapper">
      <h2>Reserve a Table</h2>
      <p className="reservation-subtitle">
        Reserve your table and enjoy an unforgettable Mediterranean dining experience.
      </p>

      <div className="reservation-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              minLength={2}
              maxLength={50}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              minLength={2}
              maxLength={50}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>

          <div className="form-group full-width">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              maxLength={100}
              required
            />
            {emailError && <span className="error">{emailError}</span>}
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="date">Date*</label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              min={today}
              required
              onChange={(e) => {
                setSelectedDate(e.target.value);
                dispatch({
                  type: 'UPDATE_TIMES',
                  date: e.target.value,
                });
              }}
            />
            {errors.date && <span className="error">{errors.date}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="select-time">Time*</label>
            <select
              id="select-time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
            >
              <option value="">Select Time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.time && <span className="error">{errors.time}</span>}
          </div>

          <div className="form-group range-container">
            <label htmlFor="numGuests">Number of Guests*</label>
            <input
              className="accent"
              type="range"
              id="numGuests"
              min="1"
              max="10"
              value={numGuests}
              onChange={(e) => setNumGuests(parseInt(e.target.value, 10))}
              required
            />
            <span className="range-value">{numGuests} Guests</span>
            {errors.numGuests && <span className="error">{errors.numGuests}</span>}
          </div>

          <div className="form-group full-width">
            <label htmlFor="occasion">Occasion*</label>
            <div className="occasion-dropdown">
              <FontAwesomeIcon className="occasion-icon" icon={faGlassCheers} />
              <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="">Select Occasion</option>
                <option value="casual">Casual Dinner</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
              </select>
            </div>

            {errors.occasion && <span className="error">{errors.occasion}</span>}
          </div>

          <button
            className={`formButton ${
              !isFormValid ? 'disabled' : ''
            }`}
            type="submit"
            disabled={!isFormValid}
          >
            Reserve Table
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;