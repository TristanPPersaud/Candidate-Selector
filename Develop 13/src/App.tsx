import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchCandidate from './pages/CandidateSearch'; // Import your SearchCandidate component
import Home from './components/Home';// Import your Home component
import Nav from './components/Nav'; // Import your Nav component
import SavedCandidates from './pages/SavedCandidates';// Import your SavedCandidates component

const App: React.FC = () => {
  return (
    <Router>
      <Nav /> {/* Render the Nav component */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/search" element={<SearchCandidate />} /> {/* SearchCandidate route */}
        <Route path="/saved" element={<SavedCandidates />} /> {/* SavedCandidates route */}
      </Routes>
    </Router>
  );
};

export default App;