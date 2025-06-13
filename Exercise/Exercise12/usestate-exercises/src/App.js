import './App.css';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
import ToggleVisibility from './components/ToggleVisibility';
import TodoList from './components/TodoList';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import DragDropList from './components/DragDropList';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>React useState Exercises</h1>
        <p>Complete collection of useState practice exercises</p>
      </header> */}
      <main>
        <Counter />
        <ControlledInput />
        <ToggleVisibility />
        <TodoList />
        <ColorSwitcher />
        <SearchFilter />
        <DragDropList />
      </main>
    </div>
  );
}

export default App;