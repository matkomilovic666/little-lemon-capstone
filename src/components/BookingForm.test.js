import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockAvailableTimes = [
  '17:00',
  '18:00',
  '19:00'
];

const mockDispatch = jest.fn();

const mockSubmitForm = jest.fn();

const renderComponent = () => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
};

test('first name input is required', () => {
  renderComponent();

  const firstNameInput =
    screen.getByLabelText(/first name/i);

  expect(firstNameInput).toHaveAttribute('required');
});

test('first name has minimum length of 2', () => {
  renderComponent();

  const firstNameInput =
    screen.getByLabelText(/first name/i);

  expect(firstNameInput).toHaveAttribute(
    'minLength',
    '2'
  );
});

test('email input has type email', () => {
  renderComponent();

  const emailInput =
    screen.getByLabelText(/email/i);

  expect(emailInput).toHaveAttribute(
    'type',
    'email'
  );
});

test('guest input has min and max values', () => {
  renderComponent();

  const guestInput =
    screen.getByLabelText(/number of guests/i);

  expect(guestInput).toHaveAttribute('min', '1');
  expect(guestInput).toHaveAttribute('max', '10');
});

test('date input is required', () => {
  renderComponent();

  const dateInput =
    screen.getByLabelText(/date/i);

  expect(dateInput).toHaveAttribute('required');
});

test('submit button is enabled when form is valid', () => {
  renderComponent();

  fireEvent.change(
    screen.getByLabelText(/first name/i),
    {
      target: { value: 'John' }
    }
  );

  fireEvent.change(
    screen.getByLabelText(/last name/i),
    {
      target: { value: 'Doe' }
    }
  );

  fireEvent.change(
    screen.getByLabelText(/email/i),
    {
      target: { value: 'john@email.com' }
    }
  );

  fireEvent.change(
    screen.getByLabelText(/date/i),
    {
      target: { value: '2026-12-25' }
    }
  );

  fireEvent.change(
    screen.getByLabelText(/time/i),
    {
      target: { value: '18:00' }
    }
  );

  fireEvent.change(
    screen.getByLabelText(/occasion/i),
    {
      target: { value: 'birthday' }
    }
  );

  const submitButton =
    screen.getByRole('button', {
      name: /reserve table/i
    });

  expect(submitButton).not.toBeDisabled();
});

test('submit button is disabled initially', () => {
  renderComponent();

  const submitButton =
    screen.getByRole('button', {
      name: /reserve table/i
    });

  expect(submitButton).toBeDisabled();
});

test('submit button stays disabled with invalid email', () => {
  renderComponent();

  fireEvent.change(
    screen.getByLabelText(/first name/i),
    {
      target: { value: 'John' }
    }
  );

  fireEvent.change(
    screen.getByLabelText(/last name/i),
    {
      target: { value: 'Doe' }
    }
  );

  fireEvent.change(
    screen.getByLabelText(/email/i),
    {
      target: { value: 'invalid-email' }
    }
  );

  const submitButton =
    screen.getByRole('button', {
      name: /reserve table/i
    });

  expect(submitButton).toBeDisabled();
});

test('required fields are invalid when empty', () => {
  renderComponent();

  const firstNameInput =
    screen.getByLabelText(/first name/i);

  expect(firstNameInput).toBeInvalid();
});

test('email field is invalid with incorrect email', () => {
  renderComponent();

  const emailInput =
    screen.getByLabelText(/email/i);

  fireEvent.change(emailInput, {
    target: { value: 'wrong-email' }
  });

  expect(emailInput).toBeInvalid();
});

test('email field is valid with correct email', () => {
  renderComponent();

  const emailInput =
    screen.getByLabelText(/email/i);

  fireEvent.change(emailInput, {
    target: { value: 'test@test.com' }
  });

  expect(emailInput).toBeValid();
});