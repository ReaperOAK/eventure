import LoginForm from '../components/LoginForm';

const LoginPage = ({ onLogin, onSwitchToRegister }) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-fest-blue via-fest-blue-light to-fest-cream p-6">
      <div className="bg-white/80 rounded-xl shadow-lg p-8 flex flex-col items-center gap-6 max-w-md w-full">
        <h1 className="text-2xl font-extrabold text-fest-blue text-center mb-2">Login to Eventure</h1>
        <LoginForm onLogin={onLogin} onSwitchToRegister={onSwitchToRegister} />
      </div>
      <footer className="mt-8 text-xs text-gray-500 text-center opacity-80">&copy; {new Date().getFullYear()} Eventure Fest</footer>
    </main>
  );
};

export default LoginPage;
