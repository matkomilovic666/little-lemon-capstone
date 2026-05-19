# Little Lemon Capstone

This project is the Little Lemon Capstone app built for the **Meta Front-End Developer certification**.

## About

Little Lemon is a restaurant reservation SPA created with React and React Router. It demonstrates:

- a responsive navigation menu
- an accessible reservation form with validation
- selectable table time slots based on the chosen date
- reservation confirmation with summary details
- semantic HTML and ARIA improvements for accessibility

## Stack

- React 19
- React Router DOM 7
- Font Awesome
- Create React App
- Custom CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### `npm test`

Runs the test runner in interactive watch mode.

### `npm run build`

Builds the app for production into the `build` folder.

### `npm run eject`

This is a permanent operation that exposes the Create React App build configuration.

## Project Structure

- `src/App.js` — app routes and shared booking state
- `src/components/Nav.js` — site navigation and responsive menu
- `src/components/Main.js` — home page layout with hero, specials, and testimonials
- `src/components/BookingForm.js` — booking form with input validation and accessible labels
- `src/components/BookingPage.js` — reservation page with form and schedule panel
- `src/components/BookingSlotsList.js` — available time slot list
- `src/components/ConfirmedBooking.js` — confirmation page for completed reservations
- `src/components/Footer.js` — footer content and social links

## Accessibility

This project includes accessibility improvements such as:

- `label` elements with `htmlFor` for form fields
- `aria-invalid` and `aria-describedby` for form error reporting
- semantic structure using `<main>`, `<section>`, `<article>`, `<nav>`, and `<footer>`
- meaningful image `alt` text

## Notes

This app is intended as a front-end certification project and does not include a production backend.
