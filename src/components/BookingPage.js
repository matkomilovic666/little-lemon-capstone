import React, { useState } from 'react';
import BookingForm from './BookingForm';
import BookingSlotsList from './BookingSlotsList';

function BookingPage() {
  const [availableTimes, setAvailableTimes] =
    useState([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ]);

  return (
    <main className="reservation-page">
      <div className="booking-layout">
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
        <BookingSlotsList
          availableTimes={availableTimes}
        />
      </div>
    </main>
  );
}

export default BookingPage;