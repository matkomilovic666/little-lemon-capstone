import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';

const ConfirmedBooking = () => {
    const location = useLocation();

    const {
    firstName,
    selectedDate,
    selectedTime,
    numGuests
    } = location.state || {};

    const hasReservation = firstName && selectedDate && selectedTime && numGuests;

  return (

    <section className="reservation-confirmed" aria-live="polite">
      <h2>Reservation Confirmed</h2>
      <FontAwesomeIcon icon={faCircleCheck} size="4x" aria-hidden="true" />
      {hasReservation ? (
        <>
          <p>Thank you {firstName}!</p>
          <p>Your table for {numGuests} guests has been reserved for {selectedDate}, at {selectedTime}.</p>
        </>
      ) : (
        <p>Reservation details are unavailable. Please return to the booking page and try again.</p>
      )}
    </section>
  );
};

export default ConfirmedBooking;