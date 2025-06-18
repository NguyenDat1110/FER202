import React from 'react';

const Score = ({ score, totalQuestions, onRestart, onShare }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getResultMessage = () => {
    if (percentage >= 80) return "Xuất sắc! 🎉";
    if (percentage >= 60) return "Tốt! 👍";
    if (percentage >= 40) return "Khá! 😊";
    return "Cần cố gắng thêm! 💪";
  };

  const handleShare = () => {
    const shareText = `Tôi vừa hoàn thành quiz và đạt được ${score}/${totalQuestions} câu đúng (${percentage}%)! 🎉`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Kết quả Quiz',
        text: shareText,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Đã copy kết quả vào clipboard!');
      }).catch(() => {
        // Fallback nếu clipboard không hoạt động
        prompt('Copy kết quả này:', shareText);
      });
    }
  };

  return (
    <div className="score-container">
      <h2 className="result-title">Kết quả của bạn</h2>
      
      <div className="score-display">
        <div className="score-number">{score}/{totalQuestions}</div>
        <div className="score-percentage">Điểm số: {percentage}%</div>
      </div>
      
      <div className="result-message">
        {getResultMessage()}
      </div>
      
      <div className="button-container">
        <button onClick={onRestart} className="restart-button">
          Chơi lại
        </button>
        
        <button onClick={onShare || handleShare} className="share-button">
          Chia sẻ kết quả
        </button>
      </div>

      <style jsx>{`
        .score-container {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 32px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1);
          padding: 48px;
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          animation: slideUp 0.8s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .score-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
          pointer-events: none;
        }

        .result-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 32px;
          color: white;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .score-display {
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
        }

        .score-number {
          font-size: 80px;
          font-weight: 900;
          background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
          line-height: 1;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .score-percentage {
          font-size: 24px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .result-message {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 40px;
          color: #ffeaa7;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 0 10px rgba(255, 234, 167, 0.3));
        }

        .button-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        .restart-button, .share-button {
          width: 100%;
          padding: 18px 32px;
          border: none;
          border-radius: 20px;
          font-weight: 700;
          cursor: pointer;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .restart-button {
          background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
          color: white;
          box-shadow: 0 8px 25px rgba(0, 184, 148, 0.3);
        }

        .restart-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 184, 148, 0.4);
        }

        .share-button {
          background: linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%);
          color: white;
          box-shadow: 0 8px 25px rgba(253, 121, 168, 0.3);
        }

        .share-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(253, 121, 168, 0.4);
        }

        .restart-button::before, .share-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .restart-button:hover::before, .share-button:hover::before {
          left: 100%;
        }

        @media (min-width: 640px) {
          .button-container {
            flex-direction: row;
          }
        }

        @media (max-width: 640px) {
          .score-container {
            padding: 32px 24px;
          }
          
          .result-title {
            font-size: 32px;
          }
          
          .score-number {
            font-size: 64px;
          }
          
          .result-message {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default Score;