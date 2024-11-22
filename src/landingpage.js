import './App.css';
import './background.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const svgElements = document.querySelectorAll('.svg-to-animate');
    svgElements.forEach((el) => el.classList.add('animate'));
  }, []); // Efek hanya terjadi saat komponen dimuat pertama kali

  return (
      <div className="background">
          <img className="wave-bg-bottom-left" src="/SVG/WaveBackground.svg" alt ="WaveBg" />
          <img className="wave-bg-top-right" height={1000} src="/SVG/WaveBackground2.svg" alt ="WaveBg2" />
          <img className="svg-left-top" height={650} src="/SVG/buletbulet.svg" alt="SvgBuletBulet" />
          <img className="svg-bottom-right" height={650} src="SVG/buletbulet2.svg" alt="SvgBuletBulet2" />
          <img className="mulai-survey" height={400} src="SVG/tulisanmulaisurvey.svg" alt="MulaiSurvey" />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#F69090' }}>
          <button className="custom-button">
            Mulai 
            </button>
        </div>
    </div>
  );
}


export default App;