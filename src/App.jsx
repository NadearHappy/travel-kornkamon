import React from 'react'
import MainLayout from './Templates/MainLayout'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Tips from './Pages/Tips';
import Tours from './Pages/Tours';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tours" element={<Tours/>} />
        <Route path="/tips" element={<Tips/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App