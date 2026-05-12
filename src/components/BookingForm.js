import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';

const BookingForm = ({
  availableTimes,
  dispatch
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [occasion, setOccasion] = useState('');
  const [numGuests, setNumGuests] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      valid = false;
    }
    if (!lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch({ type: 'RESERVE_TIME', time: selectedTime });
      setSubmissionSuccess(true);
      resetForm();
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

  return (

    <div className="reservation-form-wrapper">
      <h2>Reserve a Table</h2>
      <p className="reservation-subtitle">
        Reserve your table and enjoy an unforgettable
        Mediterranean dining experience.
      </p>

      <div className="reservation-form-container">
        <form onSubmit={handleSubmit} noValidate>

          {/* FIRST NAME */}

          <div className="form-group">
            <label htmlFor="firstName">
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && (
              <span className="error">
                {errors.firstName}
              </span>
            )}
          </div>

          {/* LAST NAME */}

          <div className="form-group">
            <label htmlFor="lastName">
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && (
              <span className="error">
                {errors.lastName}
              </span>
            )}
          </div>

          {/* EMAIL */}

          <div className="form-group full-width">
            <label htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <span className="error">
                {emailError}
              </span>
            )}
            {errors.email && (
              <span className="error">
                {errors.email}
              </span>
            )}
          </div>

          {/* DATE */}

          <div className="form-group">
            <label htmlFor="date">
              Date*
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                dispatch({
                  type: 'UPDATE_TIMES',
                  date: e.target.value
                });

              }}
            />
            {errors.date && (
              <span className="error">
                {errors.date}
              </span>
            )}
          </div>

          {/* TIME */}

          <div className="form-group">
            <label htmlFor="select-time">
              Time*
            </label>
            <select
              id="select-time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">
                Select Time
              </option>
              {availableTimes.map((time) => (
                <option
                  key={time}
                  value={time}
                >
                  {time}
                </option>
              ))}
            </select>
            {errors.time && (
              <span className="error">
                {errors.time}
              </span>
            )}
          </div>

          {/* GUESTS */}

          <div className="form-group range-container">
            <label htmlFor="numGuests">
              Number of Guests*
            </label>

            <input
              className="accent"
              type="range"
              id="numGuests"
              min="1"
              max="10"
              value={numGuests}
              onChange={(e) =>
                setNumGuests(parseInt(e.target.value))
              }
            />
            <span className="range-value">
              {numGuests} Guests
            </span>
          </div>

          {/* OCCASION */}

          <div className="form-group full-width">
            <label htmlFor="occasion">
              Occasion*
            </label>
            <div className="occasion-dropdown">
              <FontAwesomeIcon
                className="occasion-icon"
                icon={faGlassCheers}
              />
              <select
                id="occasion"
                value={occasion}
                onChange={(e) =>
                  setOccasion(e.target.value)
                }
              >
                <option value="">
                  Select Occasion
                </option>
                <option value="casual">
                  Casual Dinner
                </option>
                <option value="birthday">
                  Birthday
                </option>
                <option value="anniversary">
                  Anniversary
                </option>
                <option value="engagement">
                  Engagement
                </option>
              </select>
            </div>

            {errors.occasion && (
              <span className="error">
                {errors.occasion}
              </span>
            )}

          </div>

          {/* SUBMIT */}

          <button
            className="formButton"
            type="submit"
          >
            Reserve Table
          </button>
        </form>
      </div>

      {submissionSuccess && (
        <div
          className="success-message"
          role="alert"
        >
          Your reservation was successful!
        </div>
      )}
    </div>
  );
};

export default BookingForm;