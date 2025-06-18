// App.js
import React, { useState } from 'react';
import { Container, Nav, Navbar, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import các components
import UserPosts from './components/UserPosts';
import ValidatedInput from './components/ValidatedInput';
import EmailPasswordForm from './components/EmailPasswordForm';
import CompleteForm from './components/CompleteForm';

function App() {
  const [activeTab, setActiveTab] = useState('exercise1');
  const [userId, setUserId] = useState(1);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'exercise1':
        return (
          <div>
            <h3>Exercise 1: Data Fetching (UserPosts)</h3>
            <div className="mb-3">
              <button 
                className="btn btn-outline-primary me-2"
                onClick={() => setUserId(userId + 1)}
              >
                User tiếp theo
              </button>
              <button 
                className="btn btn-outline-secondary me-2"
                onClick={() => setUserId(userId - 1)} 
                disabled={userId <= 1}
              >
                User trước
              </button>
              <span className="badge bg-info">Đang xem User ID: {userId}</span>
            </div>
            <UserPosts userId={userId} />
          </div>
        );
      
      case 'exercise4':
        return (
          <div>
            <h3>Exercise 4: Form Validation</h3>
            <p className="text-muted">Nhập ít nhất 5 ký tự để validation hoạt động</p>
            <ValidatedInput />
          </div>
        );
      
      case 'exercise5':
        return (
          <div>
            <h3>Exercise 5: Email & Password Validation</h3>
            <p className="text-muted">
              Email phải hợp lệ, mật khẩu phải có ít nhất 8 ký tự
            </p>
            <EmailPasswordForm />
          </div>
        );
      
      case 'exercise6':
        return (
          <div>
            <h3>Exercise 6: Complete Form Validation</h3>
            <p className="text-muted">
            </p>
            <CompleteForm />
          </div>
        );
      
      default:
        return <div>Chọn một bài tập từ menu trên</div>;
    }
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">
             useEffect Exercises
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link 
              active={activeTab === 'exercise1'}
              onClick={() => setActiveTab('exercise1')}
              style={{ cursor: 'pointer' }}
            >
              Exercise 1: Data Fetching
            </Nav.Link>
            <Nav.Link 
              active={activeTab === 'exercise4'}
              onClick={() => setActiveTab('exercise4')}
              style={{ cursor: 'pointer' }}
            >
              Exercise 4: Basic Validation
            </Nav.Link>
            <Nav.Link 
              active={activeTab === 'exercise5'}
              onClick={() => setActiveTab('exercise5')}
              style={{ cursor: 'pointer' }}
            >
              Exercise 5: Email & Password
            </Nav.Link>
            <Nav.Link 
              active={activeTab === 'exercise6'}
              onClick={() => setActiveTab('exercise6')}
              style={{ cursor: 'pointer' }}
            >
              Exercise 6: Complete Form
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container>
        <Card>
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                {activeTab === 'exercise1' && 'Data Fetching '}
                {activeTab === 'exercise4' && 'Basic Form Validation'}
                {activeTab === 'exercise5' && 'Email & Password Validation'}
                {activeTab === 'exercise6' && 'Complete Form Validation'}
              </span>
              <small className="text-muted">
                useEffect Hook Examples
              </small>
            </div>
          </Card.Header>
          <Card.Body>
            {renderActiveComponent()}
          </Card.Body>
        </Card>

        
      </Container>
    </div>
  );
}

export default App;