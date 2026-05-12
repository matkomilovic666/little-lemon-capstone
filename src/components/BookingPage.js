import React from 'react';
import BookingForm from './BookingForm';
import BookingSlotsList from './BookingSlotsList';

function BookingPage({
  availableTimes,
  dispatch
}) {

  return (
    <main className="reservation-page">
      <div className="booking-layout">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
        />
        <BookingSlotsList
          availableTimes={availableTimes}
        />
      </div>
    </main>
  );
}

export default BookingPage;