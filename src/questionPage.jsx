import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from './questions.json';
import "./questionPage.css";
import ProgressBar from "./ProgressBar";

const QuestionPage = () => {
  const [scores, setScores] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const questionRefs = useRef([]);

  const handleOptionChange = (questionId, value, index) => {
    setScores((prev) => ({ ...prev, [questionId]: value }));

    // Scroll to the next question
    if (index < questions.length - 1) {
      questionRefs.current[index + 1]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = () => {
    if (Object.keys(scores).length < 9) { // ada 9 pertanyaan
      setErrorMessage("Semua pertanyaan wajib diisi sebelum anda submit");
    } else {
      const totalScore = Object.values(scores).reduce((acc, val) => acc + Number(val), 0);
      navigate('/result', { state: { score: totalScore } });
    }
  };

  return (
    <div className="survey-container">
      <ProgressBar prog_percent={Math.round(100 * Object.keys(scores).length / 9)} />
      <h1>Mental Health Survey</h1>
      {questions.map((question, index) => (
        <div
          key={question.id}
          className="question-container"
          ref={(el) => (questionRefs.current[index] = el)}
        >
          <p className="question">{`${index + 1}. ${question.question}`}</p>
          <br />
          <div className="option-container">
            {question.options.map((option, optIndex) => (
              <label key={optIndex} className="option">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.value}
                  onChange={() => handleOptionChange(question.id, option.value, index)}
                />
                <span className={`circle ${['d', 'c', 'b', 'a'][optIndex]}`} />
                <span>{option.text}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <h3>{errorMessage}</h3>
      <button id="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
      <br />
      <br />
      <br />
      {/* semua line break buat ngasih space progress bar */}
    </div>
  );
};

export default QuestionPage;
