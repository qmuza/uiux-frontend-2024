import React from 'react';
import './instructionPage.css';
import { useNavigate } from 'react-router-dom';

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
              <p>Klik tombol di bawah untuk memulai</p>
              <button className="start-button" onClick={() => navigate('/survey')}>
                <p>Mulai</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionPage;