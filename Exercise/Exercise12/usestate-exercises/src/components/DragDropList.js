import { useState } from 'react';
import './DragDropList.css';

function DragDropList() {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2', 
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6'
  ]);

  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggingItem(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    
    if (draggingItem === null) return;
    
    const newItems = [...items];
    const draggedItem = newItems[draggingItem];
    
    newItems.splice(draggingItem, 1);
    
    newItems.splice(dropIndex, 0, draggedItem);
    
    setItems(newItems);
    setDraggingItem(null);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <div className="drag-drop-container">
      <h2>Drag and Drop List</h2>
      <p className="instructions">Drag items to reorder the list</p>
      
      <ul className="drag-drop-list">
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
            className={`drag-item ${draggingItem === index ? 'dragging' : ''}`}
          >
            <span className="drag-handle">⋮⋮</span>
            <span className="item-text">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragDropList;