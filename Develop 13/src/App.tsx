

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'; // Import your Nav component
import SearchCandidate from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';
import Candidate from './interfaces/Candidate.interface';



const App: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(() => {
    const saved = localStorage.getItem('savedCandidates');
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <Router>
      <div>
        <Nav /> 
        <Routes>
          <Route path="/" element={<h1>Welcome to the Candidate Selector</h1>} />
          <Route path="/search" element={<SearchCandidate setSavedCandidates={setSavedCandidates} />} />
          <Route path="/saved" element={<SavedCandidates savedCandidates={savedCandidates} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;