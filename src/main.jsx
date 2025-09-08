import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './MyComponents/NavBar';
import Footer from './MyComponents/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <NavBar title="Premier League"/>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
