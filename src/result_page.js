import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './result_page.css';


function ResultPage() {
  const location = useLocation();
  const { score } = location.state || { score: 0 }; 

  
  const [description, setDescription] = useState(''); // State untuk deskripsi

  useEffect(() => {
    updateDescription(score);
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
      setDescription('Invalid score'); // Untuk skor di luar rentang
    }
  };

  return (
    <div className='outer-wrapper'>
      <div className='result-wrapper'>
        <div className="rectangle"></div>

        <div className="container">

          <div className="score-box">
            <p>Skor anda:</p>
            <h2 id="scoreValue">{score}</h2>
            <p>{description}</p>{/* tempat untuk mendeskripsikan skor */}
          </div>

          <div className='contact-center'>
            <p>Jika anda membutuhkan bantuan silahkan menghubungi layanan di bawah ini:</p>
            <br />
            <a 
            href="https://ukp.psikologi.ugm.ac.id/">
            <h4>Unit Konsultasi Psikologi UGM </h4>
            </a>
            <a href="https://gmc.ugm.ac.id/">
            <h4>Gadjah Mada Medical Center</h4>
            </a>
          </div>

          {/* <div className="table">
            <div className="row" id="score1">
              <span>0-4:</span>
              <span>No depression</span>
            </div>

            <div className="row" id="score2">
              <span>5-9:</span>
              <span>Mild depression</span>
            </div>

            <div className="row" id="score3">
              <span>10-14:</span>
              <span>Moderate depression</span>
            </div>

            <div className="row" id="score4">
              <span>15-19:</span>
              <span>Moderately severe depression</span>
            </div>

            <div className="row" id="score5">
              <span>20-27:</span>
              <span>Severe depression</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ResultPage;