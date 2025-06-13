import React from 'react';
import SimpleCard from './components/SimpleCard';
import logo from './images/logoFPT.png'; 

function App() {
  const item = {
    imageUrl: logo
  };

  return (
    <div className="container mt-5">
      <SimpleCard item={item} />
    </div>
  );
}

export default App;
