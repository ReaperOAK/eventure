import './styles/index.css';



import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Home from './pages/Home';
import ScanPage from './pages/ScanPage';
import ProgressPage from './pages/ProgressPage';
import LeaderboardPage from './pages/LeaderboardPage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';

function App() {
  const [user, setUser] = useState<string | null>(() => {
    return localStorage.getItem('eventure_name');
  });

  const [page, setPage] = useState<'home' | 'scan' | 'progress' | 'leaderboard' | 'admin'>('home');

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoginForm onLogin={setUser} />
      </div>
    );
  }

  // Simple page switcher (routing placeholder)
  if (page === 'home') {
    return (
      <div className="min-h-screen bg-gray-50">
        <DashboardPage user={user} onNavigate={setPage} />
      </div>
    );
  }
  if (page === 'admin') {
    return (
      <div className="min-h-screen bg-gray-50">
        <button className="text-blue-600 underline m-4" onClick={() => setPage('home')}>
          ← Back to Dashboard
        </button>
        <AdminPage />
      </div>
    );
  }
  if (page === 'scan') {
    return (
      <div className="min-h-screen bg-gray-50">
        <button className="text-blue-600 underline m-4" onClick={() => setPage('home')}>
          ← Back to Home
        </button>
        <ScanPage />
      </div>
    );
  }
  if (page === 'progress') {
    return (
      <div className="min-h-screen bg-gray-50">
        <button className="text-blue-600 underline m-4" onClick={() => setPage('home')}>
          ← Back to Home
        </button>
        <ProgressPage />
      </div>
    );
  }
  if (page === 'leaderboard') {
    return (
      <div className="min-h-screen bg-gray-50">
        <button className="text-blue-600 underline m-4" onClick={() => setPage('home')}>
          ← Back to Home
        </button>
        <LeaderboardPage />
      </div>
    );
  }
  // fallback
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <button className="text-blue-600 underline" onClick={() => setPage('home')}>
        ← Back to Home
      </button>
      <span className="ml-4 text-gray-500">{page.charAt(0).toUpperCase() + page.slice(1)} page coming soon…</span>
    </div>
  );
}

export default App;
