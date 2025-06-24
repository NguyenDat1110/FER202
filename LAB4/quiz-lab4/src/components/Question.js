import React, { useState, useEffect, useContext } from 'react';
import { QuizContext } from './QuizProvider';
import { quizData } from '../data/quizData';

const Question = () => {
  const { 
    currentQuestion, 
    setCurrentQuestion, 
    setSelectedAnswers,
    score,
    setScore,
    setShowResult
  } = useContext(QuizContext);

  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const question = quizData[currentQuestion];

  // useEffect to reset selected answer when question changes
  useEffect(() => {
    setSelectedAnswer('');
    setFeedback('');
  }, [currentQuestion]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      alert('Vui lòng chọn một đáp án!');
      return;
    }

    const isCorrect = selectedAnswer === question.correctAnswer;
    setFeedback(isCorrect ? 'Chính xác!' : 'Sai rồi!');
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    // Move to next question after 1 second
    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1 className="quiz-title">QUIZ REACTJS</h1>
        <div className="quiz-info">
          <span>Câu hỏi {currentQuestion + 1} / {quizData.length}</span>
          <span>Điểm: {score}</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-text">{question.question}</h2>
        
        <div className="answers-container">
          {question.answers.map((answer, index) => (
            <div 
              key={index} 
              className={`answer-option ${selectedAnswer === answer ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(answer)}
            >
              <div className="radio-button">
                <div className={`radio-dot ${selectedAnswer === answer ? 'active' : ''}`}></div>
              </div>
              <span className="answer-text">{answer}</span>
            </div>
          ))}
        </div>

        {feedback && (
          <div className={`feedback ${feedback === 'Chính xác!' ? 'correct' : 'incorrect'}`}>
            {feedback}
          </div>
        )}

        <button 
          className="submit-button"
          onClick={handleSubmit}
          disabled={!selectedAnswer}
        >
          {currentQuestion < quizData.length - 1 ? 'XÁC NHẬN ĐÁP ÁN' : 'KẾT THÚC QUIZ'}
        </button>
      </div>
    </div>
  );
};

export default Question;