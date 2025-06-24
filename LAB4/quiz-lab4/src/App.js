import React from 'react';
import { QuizProvider } from './components/QuizProvider';
import Quiz from './components/Quiz';

function App() {
  return (
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );
}

export default App;