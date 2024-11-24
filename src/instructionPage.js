import React from 'react';
import './instructionPage.css';
import { useNavigate } from 'react-router-dom';

const ChevronDown = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="scroll-icon"
  >
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

const InstructionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="instruction-container">
      <div className="instruction-wrapper">
        <div className="instruction-card">
          <div className="instruction-content">
            <div className="instruction-header">
              <h1>Instruksi Pengisian</h1>
              
              <div className="instruction-text">
                <p>
                  Dalam kuesioner ini, Anda akan menemui beberapa pertanyaan mengenai pengalaman Anda 
                  selama <span className="highlight">2 minggu terakhir</span>.
                </p>
              

                <p className="reminder-text">
                  Jawablah dengan jujur sesuai dengan apa yang Anda rasakan.
                </p>
              </div>
            </div>

            <div className="scroll-prompt">
              <p>Klik panah di bawah untuk memulai</p>
              <button className="down-button" onClick={() => navigate('/survey')}>
                <ChevronDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionPage;