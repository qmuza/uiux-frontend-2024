import './App.css';
import './background.css';
import { useEffect } from 'react';
import SvgBuletBulet from './SVG/buletbulet.svg';
import SvgBuletBulet2 from './SVG/buletbulet2.svg';
import MulaiSurvey from './SVG/tulisanmulaisurvey.svg';
import WaveBg from './SVG/WaveBackground.svg';
import WaveBg2 from './SVG/WaveBackground2.svg';

function App() {
  useEffect(() => {
    const svgElements = document.querySelectorAll('.svg-to-animate');
    svgElements.forEach((el) => el.classList.add('animate'));
  }, []); // Efek hanya terjadi saat komponen dimuat pertama kali

  return (
      <div className="background">
          <img className="wave-bg-bottom-left" src={WaveBg} alt ="WaveBg" />
          <img className="wave-bg-top-right" height={1000} src={WaveBg2} alt ="WaveBg2" />
          <img className="svg-left-top" height={650} src={SvgBuletBulet} alt="SvgBuletBulet" />
          <img className="svg-bottom-right" height={650} src={SvgBuletBulet2} alt="SvgBuletBulet2" />
          <img className="mulai-survey" height={400} src={MulaiSurvey} alt="MulaiSurvey" />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#F69090' }}>
          <button className="custom-button">
            Mulai 
            </button>
        </div>
    </div>
  );
}


export default App;
