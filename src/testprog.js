import './background.css';

function TestPage() {
    return (
        <div className="background">
          <img className="wave-bg-bottom-left" src="/SVG/WaveBackground.svg" alt="WaveBg" />
          <img className="wave-bg-top-right" height={1000} src="/SVG/WaveBackground2.svg" alt="WaveBg2" />
          <img className="svg-left-top" height={500} src="/SVG/buletbulet.svg" alt="SvgBuletBulet" />
          <img className="svg-bottom-right" height={450} src="SVG/buletbulet2.svg" alt="SvgBuletBulet2" />
          <img className="mulai-survey" height={300} src="SVG/tulisanmulaisurvey.svg" alt="MulaiSurvey" />
          <div className="button-container">
            <button className="custom-button" onClick={console.log("hi")}>
              Mulai
            </button>
          </div>
        </div>
    );
}
export default TestPage;