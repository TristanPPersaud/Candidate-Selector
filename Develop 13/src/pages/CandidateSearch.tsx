
import React, { useState } from 'react';
import { searchGithub } from '../api/API'; 
import Candidate from '../interfaces/Candidate.interface';

interface SearchCandidateProps {
  setSavedCandidates: React.Dispatch<React.SetStateAction<Candidate[]>>;
}

const SearchCandidate: React.FC<SearchCandidateProps> = ({ setSavedCandidates }) => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0); 

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchGithub(); 
      setCandidates(data);
      setCurrentIndex(0); 
    } catch (err) {
      setError('Failed to fetch candidates');
    } finally {
      setLoading(false);
    }
  };

  const nextCandidate = () => {
    if (currentIndex < candidates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousCandidate = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const saveCandidate = () => {
    const candidateToSave = candidates[currentIndex];
    setSavedCandidates(prevSaved => {
      if (!prevSaved.some(candidate => candidate.id === candidateToSave.id)) {
        const updatedSavedCandidates = [...prevSaved, candidateToSave];
        localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates));
        return updatedSavedCandidates;
      }
      return prevSaved;
    });
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Loading...' : 'Search Candidates'}
      </button>
      {error && <p>{error}</p>}
      {candidates.length > 0 && (
        <div>
          <img
            src={candidates[currentIndex].avatar_url}
            alt={`${candidates[currentIndex].login}'s avatar`}
          />
          <h2>{candidates[currentIndex].login}</h2>
          <p>Name: {candidates[currentIndex].name || 'N/A'}</p>
          <p>Company: {candidates[currentIndex].company || 'N/A'}</p>
          <p>Location: {candidates[currentIndex].location || 'N/A'}</p>
          <p>
            <a
              href={candidates[currentIndex].html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </p>
          <button onClick={previousCandidate} disabled={currentIndex === 0}>
            Previous
          </button>
          <button onClick={nextCandidate} disabled={currentIndex === candidates.length - 1}>
            Next
          </button>
          <button onClick={saveCandidate}>
            Save Candidate
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchCandidate;