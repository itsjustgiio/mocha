// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import Signup from './pages/Signup';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/" element={<Layout><WelcomePage /></Layout>} />
      <Route path="/home" element={<Layout><HomePage /></Layout>} />
      <Route path="/welcome" element={<Layout><WelcomePage /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/signup" element={<Layout><Signup /></Layout>} />
      <Route path="/login" element={<Layout><Login /></Layout>} />
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />

    </Routes>
  );
}

export default App;
