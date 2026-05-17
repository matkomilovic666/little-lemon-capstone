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

  return (

    <section className=" reservation-confirmed">
      <FontAwesomeIcon icon={faCircleCheck} size="4x" />

      <p>
        Thank you {firstName}!
        </p>

        <p>
        Your table for {numGuests} guests
        has been reserved for {selectedDate},
         at {selectedTime}.
        </p>
    </section>
  );
};

export default ConfirmedBooking;