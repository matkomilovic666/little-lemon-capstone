import React from 'react';

function BookingSlot({ time, available }) {

  return (

    <li
      className={`booking-slot ${
        available ? 'available' : 'reserved'
      }`}
    >

      <span>{time}</span>

      <span>
        {available ? 'Available' : 'Reserved'}
      </span>

    </li>

  );
}

export default BookingSlot;