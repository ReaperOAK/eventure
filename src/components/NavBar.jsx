
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Dashboard', page: 'home' },
  { label: 'Scan', page: 'scan' },
  { label: 'Progress', page: 'progress' },
  { label: 'Leaderboard', page: 'leaderboard' },
  { label: 'Admin', page: 'admin' },
];

const NavBar = ({ onNavigate, current, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page) => {
    setMenuOpen(false);
    onNavigate(page);
  };

  return (
    <nav className="w-full bg-white/90 backdrop-blur shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Eventure Logo"
            className="h-8 w-8 object-contain select-none"
            aria-hidden="true"
          />
          <span className="text-xl font-bold tracking-tight text-blue-700 select-none">Eventure</span>
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-2 items-center">
          {navItems.map(item => (
            <button
              key={item.page}
              className={`px-4 py-2 rounded-lg font-semibold transition focus:ring-2 focus:ring-blue-400 text-sm md:text-base shadow-sm ${
                current === item.page
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
              }`}
              onClick={() => handleNav(item.page)}
              aria-current={current === item.page ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
          {onLogout && (
            <button
              className="px-4 py-2 rounded-lg font-semibold bg-red-100 text-red-700 hover:bg-red-200 ml-2 transition focus:ring-2 focus:ring-red-400 shadow-sm"
              onClick={onLogout}
              aria-label="Logout"
            >
              Logout
            </button>
          )}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 shadow-lg border-t border-gray-200 animate-fade-in-down">
          <div className="flex flex-col gap-1 px-4 py-2">
            {navItems.map(item => (
              <button
                key={item.page}
                className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition focus:ring-2 focus:ring-blue-400 text-base ${
                  current === item.page
                    ? 'bg-blue-600 text-white scale-105 shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                }`}
                onClick={() => handleNav(item.page)}
                aria-current={current === item.page ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
            {onLogout && (
              <button
                className="w-full text-left px-4 py-2 rounded-lg font-semibold bg-red-100 text-red-700 hover:bg-red-200 mt-2 transition focus:ring-2 focus:ring-red-400"
                onClick={onLogout}
                aria-label="Logout"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
