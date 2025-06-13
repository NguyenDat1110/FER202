import { useState } from 'react';
import './ColorSwitcher.css';

function ColorSwitcher() {
  const [selectedColor, setSelectedColor] = useState('white');

  const colors = [
    { value: 'white', label: 'White' },
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'purple', label: 'Purple' },
    { value: 'orange', label: 'Orange' },
    { value: 'pink', label: 'Pink' }
  ];

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="color-switcher-container">
      <h2>Color Switcher</h2>
      
      <div className="controls">
        <label htmlFor="color-select">Choose a color:</label>
        <select 
          id="color-select"
          value={selectedColor} 
          onChange={handleColorChange}
        >
          {colors.map(color => (
            <option key={color.value} value={color.value}>
              {color.label}
            </option>
          ))}
        </select>
      </div>

      <div 
        className="color-display"
        style={{ backgroundColor: selectedColor }}
      >
        <p>Background color: {selectedColor}</p>
      </div>
    </div>
  );
}

export default ColorSwitcher;