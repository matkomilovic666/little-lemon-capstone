import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import BookingSlotsList from './BookingSlotsList';

function BookingPage({
  availableTimes,
  dispatch
}) {
    const navigate = useNavigate();

    const submitForm = (formData) => {
      const success = window.submitAPI(formData);
  
      if (success) {
        navigate('/booking-confirmed');
      }
    };

  return (
    <main className="reservation-page">
      <div className="booking-layout">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
        <BookingSlotsList
          availableTimes={availableTimes}
        />
      </div>
    </main>
  );
}

export default BookingPage;