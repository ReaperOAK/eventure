import './styles/index.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import QRScanner from "./components/QRScanner";
import ProgressList from "./components/ProgressList";
import Leaderboard from "./components/Leaderboard";
import NavBar from "./components/NavBar";
import { AppProvider } from "./store";
import { useAppContext } from './store';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/qr-scanner" element={<QRScanner />} />
        <Route path="/progress" element={<ProgressList />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
    </AppProvider>

    // <div className="min-h-screen bg-gray-50">
    //   {/* TODO: Add routing and layout */}
    //   <h1 className="text-2xl font-bold text-center mt-8">Eventure App Shell</h1>
    // </div>
  );
}

export default App;
