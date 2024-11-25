import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './result_page.css';

function ResultPage() {
  const location = useLocation();
  const { score } = location.state || { score: 0 }; 

  useEffect(() => {
    highlightCategory(score);
  }, [score]);

  const highlightCategory = (score) => {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
      row.classList.add('inactive');
      row.classList.remove('active');
    });

    if (score >= 0 && score <= 4) {
      document.getElementById('score1').classList.add('active');
    } else if (score >= 5 && score <= 9) {
      document.getElementById('score2').classList.add('active');
    } else if (score >= 10 && score <= 14) {
      document.getElementById('score3').classList.add('active');
    } else if (score >= 15 && score <= 19) {
      document.getElementById('score4').classList.add('active');
    } else if (score >= 20 && score <= 27) {
      document.getElementById('score5').classList.add('active');
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
          </div>

          <div className="table">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;