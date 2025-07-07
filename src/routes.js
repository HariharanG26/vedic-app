import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Purohits from './pages/Purohits';
import BookPooja from './pages/BookPooja';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import { Navigate } from 'react-router-dom';

const RoutesConfig = () => {
  return (
    <Routes>  {/* Wrap all routes with Routes component */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/purohits" element={<Purohits />} />
      <Route path="/book-pooja" element={<BookPooja />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Fallback route for undefined paths */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RoutesConfig;
