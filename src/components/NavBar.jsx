const NavBar = ({ onNavigate, current, onLogout }) => {
  const navItems = [
    { label: 'Dashboard', page: 'home' },
    { label: 'Scan', page: 'scan' },
    { label: 'Progress', page: 'progress' },
    { label: 'Leaderboard', page: 'leaderboard' },
    { label: 'Admin', page: 'admin' },
  ];
  return (
    <nav className="w-full bg-white shadow flex justify-center py-2 gap-2">
      {navItems.map(item => (
        <button
          key={item.page}
          className={`px-3 py-1 rounded font-medium transition focus:ring-2 focus:ring-blue-400 ${
            current === item.page
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
          }`}
          onClick={() => onNavigate(item.page)}
          aria-current={current === item.page ? 'page' : undefined}
        >
          {item.label}
        </button>
      ))}
      {onLogout && (
        <button
          className="px-3 py-1 rounded font-medium bg-red-100 text-red-700 hover:bg-red-200 ml-4 transition focus:ring-2 focus:ring-red-400"
          onClick={onLogout}
          aria-label="Logout"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default NavBar;
