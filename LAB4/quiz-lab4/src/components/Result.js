import React, { useContext } from 'react';
import { QuizContext } from './QuizProvider';
import { quizData } from '../data/quizData';

const Result = () => {
  const { 
    score, 
    setCurrentQuestion, 
    setScore, 
    setShowResult, 
    setSelectedAnswers 
  } = useContext(QuizContext);
  
  const percentage = Math.round((score / quizData.length) * 100);

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswers({});
  };

  return (
    <div className="quiz-container">
      <div className="result-card">
        <h1 className="quiz-title">KẾT QUẢ QUIZ</h1>
        <div className="result-info">
          <h2>Bạn đã hoàn thành quiz!</h2>
          <div className="score-display">
            <span className="score-text">Điểm số: {score}/{quizData.length}</span>
            <span className="percentage-text">({percentage}%)</span>
          </div>
          <button className="restart-button" onClick={restartQuiz}>
            LÀM LẠI QUIZ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;