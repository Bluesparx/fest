import './App.css'
import { Button } from "@/components/ui/button";
import HomePage from './pages/Landing';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import Team from './pages/Team';
import SponsorsPage from './pages/Sponsors';
import Itinerary from './pages/Itinerary';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sponsors" element={<SponsorsPage/>} />
            <Route path="/itinerary" element={<Itinerary/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;