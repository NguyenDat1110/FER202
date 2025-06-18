import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';

const QuizApp = () => {
  // Dữ liệu mẫu cho các câu hỏi (có thể thay đổi theo yêu cầu)
  const [questions] = useState([
    {
      question: "React là gì?",
      options: [
        "Một thư viện JavaScript để xây dựng giao diện người dùng",
        "Một ngôn ngữ lập trình",
        "Một framework CSS",
        "Một cơ sở dữ liệu"
      ],
      correctAnswer: 0
    },
    {
      question: "JSX là viết tắt của gì?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension", 
        "JSON XML",
        "JavaScript eXtension"
      ],
      correctAnswer: 0
    },
    {
      question: "Hook nào được sử dụng để quản lý state trong functional component?",
      options: [
        "useEffect",
        "useState", 
        "useContext",
        "useReducer"
      ],
      correctAnswer: 1
    },
    {
      question: "Props trong React được sử dụng để làm gì?",
      options: [
        "Lưu trữ state local",
        "Truyền dữ liệu từ parent component đến child component",
        "Quản lý lifecycle của component", 
        "Xử lý events"
      ],
      correctAnswer: 1
    },
    {
      question: "Virtual DOM trong React có tác dụng gì?",
      options: [
        "Tăng tốc độ render bằng cách so sánh và cập nhật chỉ những phần thay đổi",
        "Lưu trữ dữ liệu ứng dụng",
        "Xử lý routing",
        "Quản lý API calls"
      ],
      correctAnswer: 0
    }
  ]);

  // State variables để quản lý trạng thái ứng dụng
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Method để xử lý việc chọn đáp án
  const handleAnswerSelect = (answerIndex) => {
    if (!isAnswered) {
      setSelectedAnswer(answerIndex);
    }
  };

  // Method để kiểm tra đáp án và chuyển câu hỏi tiếp theo
  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setIsAnswered(true);

    // Kiểm tra đáp án đúng/sai
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }

    // Chuyển sang câu hỏi tiếp theo sau 1.5 giây
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        // Hiển thị kết quả cuối cùng
        setShowResult(true);
      }
    }, 1500);
  };

  // Method để khởi động lại quiz
  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsAnswered(false);
    setShowResult(false);
  };

  // Method để chia sẻ kết quả
  const handleShare = () => {
    const percentage = Math.round((score / questions.length) * 100);
    const shareText = `Tôi vừa hoàn thành quiz React và đạt được ${score}/${questions.length} câu đúng (${percentage}%)! 🎉`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Kết quả Quiz React',
        text: shareText,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Đã copy kết quả vào clipboard!');
      }).catch(() => {
        prompt('Copy kết quả này:', shareText);
      });
    }
  };

  return (
    <div className="quiz-app">
      <h1 className="app-title">Quiz ReactJS</h1>

      {!showResult ? (
        <div>
          {/* Progress bar */}
          <div className="progress-container">
            <div className="progress-info">
              <span>Câu hỏi {currentQuestion + 1} / {questions.length}</span>
              <span>Điểm: {score}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Component */}
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            onSubmit={handleSubmitAnswer}
            isAnswered={isAnswered}
          />

          {/* Feedback sau khi trả lời */}
          {isAnswered && (
            <div className={`feedback ${
              selectedAnswer === questions[currentQuestion].correctAnswer 
                ? 'feedback-correct' 
                : 'feedback-incorrect'
            }`}>
              {selectedAnswer === questions[currentQuestion].correctAnswer 
                ? '✅ Chính xác!' 
                : `❌ Sai rồi! Đáp án đúng là: ${questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}`
              }
            </div>
          )}
        </div>
      ) : (
        /* Score Component */
        <Score
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
          onShare={handleShare}
        />
      )}

      <style jsx>{`
        .quiz-app {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          padding: 40px 20px;
          position: relative;
          overflow-x: hidden;
        }

        .quiz-app::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="1" fill="white" opacity="0.05"/><circle cx="10" cy="50" r="1" fill="white" opacity="0.05"/><circle cx="90" cy="50" r="1" fill="white" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          pointer-events: none;
        }

        .app-title {
          font-size: 64px;
          font-weight: 900;
          text-align: center;
          margin-bottom: 48px;
          background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 50%, #fd79a8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
          text-transform: uppercase;
          letter-spacing: 4px;
          animation: titleGlow 3s ease-in-out infinite alternate;
        }

        @keyframes titleGlow {
          from {
            filter: drop-shadow(0 0 10px rgba(255, 234, 167, 0.3));
          }
          to {
            filter: drop-shadow(0 0 20px rgba(255, 234, 167, 0.6));
          }
        }

        .progress-container {
          max-width: 900px;
          margin: 0 auto 40px auto;
          position: relative;
          z-index: 1;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 16px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .progress-bar {
          width: 100%;
          height: 12px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ffeaa7 0%, #fab1a0 50%, #fd79a8 100%);
          border-radius: 20px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 20px rgba(255, 234, 167, 0.5);
          position: relative;
          overflow: hidden;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: progressShine 2s infinite;
        }

        @keyframes progressShine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .feedback {
          max-width: 900px;
          margin: 32px auto 0 auto;
          text-align: center;
          padding: 24px 32px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 18px;
          position: relative;
          z-index: 1;
          backdrop-filter: blur(10px);
          animation: feedbackSlide 0.5s ease-out;
        }

        @keyframes feedbackSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feedback-correct {
          background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
          color: white;
          box-shadow: 0 10px 30px rgba(0, 184, 148, 0.3);
        }

        .feedback-incorrect {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          color: white;
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
        }

        /* Container cho các component con */
        .quiz-app > div {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Floating elements decoration */
        .quiz-app::after {
          content: '';
          position: absolute;
          top: 10%;
          right: 10%;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 234, 167, 0.2) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .app-title {
            font-size: 42px;
            letter-spacing: 2px;
          }
          
          .quiz-app {
            padding: 24px 12px;
          }

          .progress-info {
            font-size: 14px;
          }

          .feedback {
            font-size: 16px;
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .app-title {
            font-size: 32px;
            letter-spacing: 1px;
          }
        }
      `}</style>
    </div>
  );
};

export default QuizApp;