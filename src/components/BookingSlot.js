import React from 'react';

function BookingSlot({ time, available }) {

  return (

    <div
      className={`booking-slot ${
        available ? 'available' : 'reserved'
      }`}
    >

      <span>{time}</span>

      <span>
        {available ? 'Available' : 'Reserved'}
      </span>

    </div>

  );
}

export default BookingSlot;