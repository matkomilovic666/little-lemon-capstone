import React from 'react';
import BookingSlot from './BookingSlot';

function BookingSlotsList({ availableTimes }) {

  const allTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];

  return (

    <div className="booking-slots-container">

      <h3>Available Table Times</h3>

      <div className="booking-slots-grid">

        {allTimes.map((time) => (

          <BookingSlot
            key={time}
            time={time}
            available={availableTimes.includes(time)}
          />

        ))}

      </div>

    </div>
  );
}

export default BookingSlotsList;