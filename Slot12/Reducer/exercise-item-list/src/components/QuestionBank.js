// ✅ File: src/components/QuestionBank.js
import React, { useReducer, useEffect, useState } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: "",
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      const isCorrect =
        action.payload === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        selectedOption: action.payload,
        feedback: isCorrect
          ? "Correct! 🎉"
          : `Incorrect! The correct answer is: ${
              state.questions[state.currentQuestion].answer
            }`,
      };

    case "NEXT_QUESTION":
      const correct =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        score: correct ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        feedback: "",
        showScore: state.currentQuestion + 1 === state.questions.length,
      };

    case "RESTART_QUIZ":
      return { ...initialState };

    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {
    questions,
    currentQuestion,
    selectedOption,
    score,
    showScore,
    feedback,
  } = state;
  const [timeLeft, setTimeLeft] = useState(10);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem("highScore")) || 0
  );

  useEffect(() => {
    if (showScore) {
      if (score > highScore) {
        localStorage.setItem("highScore", score);
        setHighScore(score);
      }
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          handleNextQuestion();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [state.currentQuestion, showScore]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
    setTimeLeft(10);
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setTimeLeft(10);
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <h4>High Score: {highScore}</h4>
            <Button variant="primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            <h5 className="mb-3">
              Question {questions[currentQuestion].id} / {questions.length}
            </h5>
            <ProgressBar
              now={(timeLeft / 10) * 100}
              variant={timeLeft < 5 ? "danger" : "success"}
              className="mb-3"
              label={`${timeLeft}s`}
            />

            <h4>{questions[currentQuestion].question}</h4>
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option ? "success" : "outline-secondary"
                  }
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>

            {feedback && (
              <div className="mt-3">
                {feedback.includes("Correct") ? (
                  <p className="text-success">
                    <FaCheckCircle className="me-1" /> {feedback}
                  </p>
                ) : (
                  <p className="text-danger">
                    <FaTimesCircle className="me-1" /> {feedback}
                  </p>
                )}
              </div>
            )}

            <Button
              variant="primary"
              className="mt-3"
              disabled={!selectedOption}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;
