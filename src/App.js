import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
