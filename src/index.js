import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import InstructionPage from './instructionPage';
import MentalHealthSurvey from './MentalHealthSurvey';
import ResultPage from './result_page';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/instructions" element={<InstructionPage />} />
          <Route path="/survey" element={<MentalHealthSurvey />} />
          <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);