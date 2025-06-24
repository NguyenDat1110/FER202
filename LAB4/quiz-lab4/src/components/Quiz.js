import React, { useContext } from 'react';
import { QuizContext } from './QuizProvider';
import Question from './Question';
import Result from './Result';
import '../styles/Quiz.css';

const Quiz = () => {
  const { showResult } = useContext(QuizContext);

  return (
    <div className="app">
      {showResult ? <Result /> : <Question />}
    </div>
  );
};

export default Quiz;