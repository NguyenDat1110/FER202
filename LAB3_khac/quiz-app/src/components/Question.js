import React from 'react';

const Question = ({ question, options, selectedAnswer, onAnswerSelect, onSubmit, isAnswered }) => {
  return (
    <div className="question-container">
      <h2 className="question-title">{question}</h2>
      
      <div className="options-container">
        {options.map((option, index) => (
          <label key={index} className="option-label">
            <input
              type="radio"
              name="answer"
              value={index}
              checked={selectedAnswer === index}
              onChange={() => onAnswerSelect(index)}
              disabled={isAnswered}
              className="option-input"
            />
            <span className="option-text">{option}</span>
          </label>
        ))}
      </div>
      
      <button
        onClick={onSubmit}
        disabled={selectedAnswer === null || isAnswered}
        className="submit-button"
      >
        {isAnswered ? 'Đã trả lời' : 'Xác nhận đáp án'}
      </button>

      <style jsx>{`
        .question-container {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1);
          padding: 32px;
          margin-bottom: 32px;
          transform: translateY(0);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .question-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          pointer-events: none;
        }

        .question-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2);
        }

        .question-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 24px;
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
        }

        .options-container {
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
        }

        .option-label {
          display: flex;
          align-items: center;
          padding: 16px 20px;
          margin-bottom: 16px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .option-label::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transition: left 0.5s;
        }

        .option-label:hover::before {
          left: 100%;
        }

        .option-label:hover {
          transform: translateX(8px);
          border-color: #667eea;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .option-input {
          margin-right: 16px;
          width: 20px;
          height: 20px;
          accent-color: #667eea;
        }

        .option-text {
          color: #1f2937;
          font-weight: 500;
          font-size: 16px;
        }

        .submit-button {
          width: 100%;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          color: white;
          padding: 16px 24px;
          border: none;
          border-radius: 16px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #ff7675 0%, #fd79a8 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .submit-button:hover:not(:disabled)::before {
          opacity: 1;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
        }

        .submit-button:disabled {
          background: linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%);
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .submit-button:disabled::before {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Question;