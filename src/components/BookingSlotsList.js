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

    <section className="booking-slots-container" aria-labelledby="available-times-heading">

      <h3 id="available-times-heading">Available Table Times</h3>

      <ul className="booking-slots-grid">

        {allTimes.map((time) => (

          <BookingSlot
            key={time}
            time={time}
            available={availableTimes.includes(time)}
          />

        ))}

      </ul>

    </section>
  );
}

export default BookingSlotsList;