import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
