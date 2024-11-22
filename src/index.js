import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import InstructionPage from './instructionPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/instructions" element={<InstructionPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);