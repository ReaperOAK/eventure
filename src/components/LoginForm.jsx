import { useState } from 'react';


const LoginForm = ({ onLogin, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError('Please enter your email and password.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      // In a real app, validate credentials with backend
      onLogin(email.trim(), password);
      setLoading(false);
    }, 800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-16 p-6 bg-white rounded-lg shadow flex flex-col gap-4"
      aria-label="Login form"
    >
      <h2 className="text-xl font-semibold text-center">Welcome to Eventure</h2>
      <label className="font-medium">Email
        <input
          type="email"
          className="mt-1 block w-full rounded border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none p-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoFocus
          aria-required="true"
          aria-invalid={!!error}
          aria-describedby={error ? 'login-error' : undefined}
          disabled={loading}
        />
      </label>
      <label className="font-medium">Password
        <input
          type="password"
          className="mt-1 block w-full rounded border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none p-2"
          value={password}
          onChange={e => setPassword(e.target.value)}
          aria-required="true"
          aria-invalid={!!error}
          aria-describedby={error ? 'login-error' : undefined}
          disabled={loading}
        />
      </label>
      {error && (
        <div id="login-error" className="text-red-600 text-sm" role="alert">
          {error}
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Logging in…' : 'Login'}
      </button>
      <button
        type="button"
        className="text-blue-600 underline text-sm mt-2"
        onClick={onSwitchToRegister}
      >
        Don't have an account? Register
      </button>
    </form>
  );
};


export default LoginForm;
