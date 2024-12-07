import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Tambahkan useNavigate
import './result_page.css';

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate(); // Untuk navigasi ke landing page
  const { score } = location.state || { score: 0 };

  const [description, setDescription] = useState('');
  const [motivation, setMotivation] = useState('');

  const motivations = [
    'You are stronger than you think.',
    'Every storm runs out of rain.',
    'Focus on the good, even in tough times.',
    'Healing takes time, and that’s okay.',
    'Believe in yourself and your ability to grow.',
  ];

  useEffect(() => {
    updateDescription(score);
    setMotivation(motivations[Math.floor(Math.random() * motivations.length)]);
  }, [score]);

  const updateDescription = (score) => {
    if (score >= 0 && score <= 4) {
      setDescription('No depression');
    } else if (score >= 5 && score <= 9) {
      setDescription('Mild depression');
    } else if (score >= 10 && score <= 14) {
      setDescription('Moderate depression');
    } else if (score >= 15 && score <= 19) {
      setDescription('Moderately severe depression');
    } else if (score >= 20 && score <= 27) {
      setDescription('Severe depression');
    } else {
      setDescription('Invalid score');
    }
  };

  const handleBack = () => {
    navigate('/'); // Navigasi ke halaman landing
  };

  return (
    <div className="outer-wrapper">
      <div className="result-wrapper">
        <div className="rectangle"></div>

        <div className="container">
          <div className="score-box">
            <p>Skor anda:</p>
            <h2 id="scoreValue">{score}</h2>
            <p>{description}</p>
          </div>

          {/* Menambahkan paragraf di atas link */}
          <p>Jika anda membutuhkan bantuan silahkan menghubungi layanan di bawah ini:</p>

          <div className="contact-center">
            <a href="https://ukp.psikologi.ugm.ac.id/">
              Unit Konsultasi Psikologi UGM
            </a>
            <a href="https://gmc.ugm.ac.id/">
              Gadjah Mada Medical Center
            </a>
          </div>

          <p className="motivation">{motivation}</p>

          <button className="back-button" onClick={handleBack}>
            Kembali ke Landing Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;