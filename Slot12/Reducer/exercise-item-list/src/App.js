// src/App.js
import React from "react";
import ItemList from "./components/ItemList";
import QuestionBank from "./components/QuestionBank";
import QuizAdvanced from "./components/QuizAdvanced";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h2 className="text-center mt-4">Item List</h2>
      <ItemList />

      <hr />

      <h2 className="text-center mt-5"> QuestionBank</h2>
      <QuestionBank />

      <hr />
    </div>
  );
}

export default App;
