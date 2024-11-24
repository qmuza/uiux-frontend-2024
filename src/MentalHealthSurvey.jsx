import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from './questions.json';
import "./MentalHealthSurvey.css";
import ProgressBar from "./ProgressBar"

const MentalHealthSurvey = () => {
  const [scores, setScores] = useState({});
  const navigate = useNavigate();

  const handleOptionChange = (questionId, value) => {
    setScores((prev) => ({ ...prev, [questionId]: value }));
  };

 const handleSubmit = () => {
  const totalScore = Object.values(scores).reduce((acc, val) => acc + Number(val), 0);
  navigate('/result', { state: { score: totalScore } });
};

  return (
    <div className="survey-container">
      <ProgressBar prog_percent={0} />
      <h1>Mental Health Survey</h1>
      {questions.map((question, index) => (
        <div key={question.id} className="question-container">
          <p className="question">{`${index + 1}. ${question.question}`}</p>
          <div className="option-container">
            {question.options.map((option, optIndex) => (
              <label key={optIndex} className="option">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.value}
                  onChange={() => handleOptionChange(question.id, option.value)}
                />
                <span className={`circle ${['a', 'b', 'c', 'd'][optIndex]}`} />
                <span>{option.text}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button id="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default MentalHealthSurvey;
