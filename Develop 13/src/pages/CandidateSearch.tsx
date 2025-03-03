import React, { useState } from 'react';
import { searchGithub } from '../api/API'; // Import your API functions
import Candidate from '../interfaces/Candidate.interface';

const SearchCandidate: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchGithub(); // Fetch random candidates
      setCandidates(data);
    } catch (err) {
      setError('Failed to fetch candidates');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Loading...' : 'Search Candidates'}
      </button>
      {error && <p>{error}</p>}
      <div>
        {candidates.map((candidate) => (
          <div key={candidate.id}>
            <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} />
            <h2>{candidate.login}</h2>
            <p>Name: {candidate.name || 'N/A'}</p>
            <p>Company: {candidate.company || 'N/A'}</p>
            <p>Location: {candidate.location || 'N/A'}</p>
            <p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCandidate;