import './App.css'
import { Button } from "@/components/ui/button";
import HomePage from './pages/Landing';
import Navbar from './components/navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;