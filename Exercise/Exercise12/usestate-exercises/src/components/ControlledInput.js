import { useState } from 'react';
import './ControlledInput.css';

function ControlledInput() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="controlled-input-container">
      <h2>Controlled Input Field</h2>
      <div className="input-section">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type something here..."
        />
        <div className="display-text">
          <p>You typed: <strong>{inputText}</strong></p>
        </div>
      </div>
    </div>
  );
}

export default ControlledInput;