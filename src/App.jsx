import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Home from './pages/Home';
import ScanPage from './pages/ScanPage';
import ProgressPage from './pages/ProgressPage';
import LeaderboardPage from './pages/LeaderboardPage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import RegisterPage from './pages/RegisterPage';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

function AppRoutes() {
  const [user, setUser] = useState(() => {
    return localStorage.getItem('eventure_user'); // ✅ consistent key
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('eventure_user');
    setUser(null);
    navigate('/');
  };

  const handleRegister = (name, email, password) => {
    // ✅ Store the nickname instead of email if preferred
    localStorage.setItem('eventure_user', name);
    setUser(name);
    navigate('/');
  };

  const handleLogin = (email, password) => {
    // ✅ Replace with Firebase auth login later
    localStorage.setItem('eventure_user', email);
    setUser(email);
    navigate('/');
  };

  if (!user) {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              onLogin={() => navigate('/login')}
              onRegister={() => navigate('/register')}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RegisterPage
              onRegister={handleRegister}
              onSwitchToLogin={() => navigate('/login')}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage
              onLogin={handleLogin}
              onSwitchToRegister={() => navigate('/register')}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  return (
    <>
      <NavBar
        onNavigate={(page) => navigate(page === 'home' ? '/' : `/${page}`)}
        current={window.location.pathname.replace('/', '') || 'home'}
        onLogout={handleLogout}
      />
      <div className="flex-1 flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage
                user={user}
                onNavigate={(page) => navigate(page === 'home' ? '/' : `/${page}`)}
              />
            }
          />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;