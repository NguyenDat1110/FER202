import './App.css';
import Counter from './Counter';
import UserForm from './UserForm';
import ProductList from './ProductList';
import ProductRadio from './ProductRadio';

function App() {
  return (
    <div className="App">
      <header style={{ 
        backgroundColor: '#282c34', 
        padding: '20px', 
        color: 'white',
        marginBottom: '20px'
      }}>
        <h1>React useState Hook Examples</h1>
        <p>Các ví dụ về useState hook trong React</p>
      </header>
      
      <main>
        <div style={{ borderBottom: '2px solid #eee', marginBottom: '20px' }}>
          <Counter />
        </div>
        
        <div style={{ borderBottom: '2px solid #eee', marginBottom: '20px' }}>
          <UserForm />
        </div>
        
        <div style={{ borderBottom: '2px solid #eee', marginBottom: '20px' }}>
          <ProductList />
        </div>
        
        <div>
          <ProductRadio />
        </div>
      </main>
    </div>
  );
}

export default App;