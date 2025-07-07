import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoutesConfig from './routes'; // import RoutesConfig

import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <RoutesConfig /> {/* Using RoutesConfig here */}
      <Footer />
    </Router>
  );
}

export default App;
