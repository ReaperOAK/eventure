
import React from 'react';

const Dashboard = ({ user, onNavigate }) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] gap-8 p-4">
      <h1 className="text-2xl font-bold text-center">Hi, {user.email}!</h1>
      <p className="text-gray-600 text-center max-w-xs">Welcome to your dashboard. Choose an action below:</p>
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
        <button
          className="w-full py-3 rounded bg-orange-600 text-white font-semibold text-lg shadow hover:bg-orange-700 focus:ring-2 focus:ring-orange-400 transition"
          onClick={() => onNavigate('admin')}
          aria-label="Admin Panel"
        >
          Admin Panel
        </button>
      </nav>
    </main>
  );
};

export default Dashboard;
