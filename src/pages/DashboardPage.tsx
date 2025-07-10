
import React from 'react';
import Dashboard from '../components/Dashboard';

interface DashboardPageProps {
  user: string;
  onNavigate: (page: 'scan' | 'progress' | 'leaderboard' | 'admin') => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ user, onNavigate }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <Dashboard user={user} onNavigate={onNavigate} />
    </div>
  );
};

export default DashboardPage;
