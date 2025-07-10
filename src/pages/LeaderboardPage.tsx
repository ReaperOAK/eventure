
import React from 'react';
import Leaderboard from '../components/Leaderboard';

// Placeholder data for now
const sampleEntries = [
  { id: 'u1', name: 'Owais', score: 7 },
  { id: 'u2', name: 'Sonia', score: 6 },
  { id: 'u3', name: 'Rahul', score: 5 },
];

const LeaderboardPage: React.FC = () => {
  // In real app, fetch leaderboard data
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <Leaderboard entries={sampleEntries} />
    </div>
  );
};

export default LeaderboardPage;
