import { useNavigate } from 'react-router-dom';
import React from 'react';
import './App.css';
import reactLogo from './robert-pattinson-the-batman-2021-movies-artwork-batman-hd-wallpaper-a9a0f86d415a9d7b46b7780f3001163d.jpg';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Mudipa's page</h1>
        <img src={reactLogo} alt="robert-pattinson-the-batman-2021-movies-artwork-batman-hd-wallpaper-a9a0f86d415a9d7b46b7780f3001163d.jpg" />
        <button className="users-button" onClick={() => navigate('users')}>
          Users
        </button>
      </header>
    </div>
  );
}

export default App;