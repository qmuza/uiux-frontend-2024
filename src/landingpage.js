import './background.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();


  const handleStart = (e) => {
    e.preventDefault();
    console.log("Button clicked"); // Debugging line
    navigate('/instructions');
  };

  return (
    <div className="background">
      <img style={{zIndex: 0}} className="wave-bg-bottom-left" src="/SVG/patternLeft.svg" alt="WaveBg" />
      <img style={{zIndex: 0}} className="wave-bg-top-right" src="/SVG/patternRight.svg" alt="WaveBg2" />
      
      <img style={{zIndex: 0}} className="mulai-survey"  src="SVG/SilahkanMulai.svg" alt="MulaiSurvey" />
      <div style={{zIndex: 777} } className="custom-button-container">
      <div className="soundwave"></div> 
        <button className="custom-button" onClick={handleStart}>
          Mulai
        </button>
      </div>
    </div>
  );
}

export default LandingPage;