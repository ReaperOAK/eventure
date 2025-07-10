
import React from 'react';

interface HomeProps {
  user: string;
  onNavigate: (page: 'scan' | 'progress' | 'leaderboard') => void;
}

const Home: React.FC<HomeProps> = ({ user, onNavigate }) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] gap-8 p-4">
      <h1 className="text-2xl font-bold text-center">Welcome, {user}!</h1>
      <nav className="flex flex-col gap-4 w-full max-w-xs">
        <button
          className="w-full py-3 rounded bg-blue-600 text-white font-semibold text-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition"
          onClick={() => onNavigate('scan')}
          aria-label="Scan QR Code"
        >
          Scan QR
        </button>
        <button
          className="w-full py-3 rounded bg-green-600 text-white font-semibold text-lg shadow hover:bg-green-700 focus:ring-2 focus:ring-green-400 transition"
          onClick={() => onNavigate('progress')}
          aria-label="View Progress"
        >
          View Progress
        </button>
        <button
          className="w-full py-3 rounded bg-purple-600 text-white font-semibold text-lg shadow hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 transition"
          onClick={() => onNavigate('leaderboard')}
          aria-label="View Leaderboard"
        >
          View Leaderboard
        </button>
      </nav>
    </main>
  );
};

export default Home;
