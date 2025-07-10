import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (name: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      localStorage.setItem('eventure_name', name.trim());
      onLogin(name.trim());
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-16 p-6 bg-white rounded-lg shadow flex flex-col gap-4"
      aria-label="Login form"
    >
      <h2 className="text-xl font-semibold text-center">Welcome to Eventure</h2>
      <label htmlFor="name" className="font-medium">
        Enter your nickname
        <input
          id="name"
          name="name"
          type="text"
          className="mt-1 block w-full rounded border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none p-2"
          value={name}
          onChange={e => setName(e.target.value)}
          autoFocus
          aria-required="true"
          aria-invalid={!!error}
          aria-describedby={error ? 'name-error' : undefined}
          disabled={loading}
        />
      </label>
      {error && (
        <div id="name-error" className="text-red-600 text-sm" role="alert">
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
    </form>
  );
};


export default LoginForm;
