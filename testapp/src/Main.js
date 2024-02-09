// Main.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Register from './Register';
import App from './App';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
