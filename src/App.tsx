import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Academia from './pages/Academia';
import Professional from './pages/Professional';
import Projects from './pages/Projects';
import Others from './pages/Others';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academia" element={<Academia />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/passions" element={<Others />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;