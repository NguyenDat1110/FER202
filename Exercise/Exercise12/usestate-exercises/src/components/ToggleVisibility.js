import { useState } from 'react';
import './ToggleVisibility.css';

function ToggleVisibility() {
  
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="toggle-container">
      <h2>Toggle Visibility</h2>
      <div className="toggle-section">
        <button onClick={toggleVisibility}>
          {isVisible ? 'Hide' : 'Show'}
        </button>
        
        {/* Conditional rendering */}
        {isVisible && (
          <div className="hidden-content">
            <p>Tôi Yêu FPT rất nhiều!</p>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default ToggleVisibility;