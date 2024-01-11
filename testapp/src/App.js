import { useNavigate } from 'react-router-dom';
import React from 'react';
import './App.css';
import reactLogo from './thumbbig-1328014.jpg';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Mudipa's page</h1>
        <img src={reactLogo} alt="thumbbig-1328014.jpg" />
        <button className="users-button" onClick={() => navigate('users')}>
          Users
        </button>
      </header>
    </div>
  );
}

export default App;