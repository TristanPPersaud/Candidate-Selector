import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search Candidates</Link>
        </li>
        <li>
          <Link to="/saved">Saved Candidates</Link> {/* Link to SavedCandidates page */}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
