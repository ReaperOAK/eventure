
import Dashboard from '../components/Dashboard';

const DashboardPage = ({ user, onNavigate }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <Dashboard user={user} onNavigate={onNavigate} />
    </div>
  );
};

export default DashboardPage;
