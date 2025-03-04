

import React from 'react';
import Candidate from '../interfaces/Candidate.interface';

interface SavedCandidatesProps {
  savedCandidates: Candidate[];
}

const SavedCandidates: React.FC<SavedCandidatesProps> = ({ savedCandidates }) => {
  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p>No candidates saved.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Profile Image</th>
              <th>Name</th>
              <th>Username</th>
              <th>Location</th>
              <th>Company</th>
              <th>Profile Link</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map(candidate => (
              <tr key={candidate.id}>
                <td>
                  <img
                    src={candidate.avatar_url}
                    alt={`${candidate.login}'s avatar`}
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
                  />
                </td>
                <td>{candidate.name || 'N/A'}</td>
                <td>{candidate.login}</td>
                <td>{candidate.location || 'N/A'}</td>
                <td>{candidate.company || 'N/A'}</td>
                <td>
                  <a
                    href={candidate.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCandidates;