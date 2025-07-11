import { useState } from 'react';
import { auth, db } from '../services/firebase'; // adjust path to your firebase.js
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const RegisterPage = ({ onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password || !confirm) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email.trim(), password);
      const user = userCred.user;

      // Save to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: name.trim(),
        email: user.email,
        createdAt: serverTimestamp()
      });

      alert('Registration successful! You can now log in.');
      onSwitchToLogin();

    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-16 p-6 bg-white rounded-lg shadow flex flex-col gap-4"
      aria-label="Registration form"
    >
      <h2 className="text-xl font-semibold text-center">Register for Eventure</h2>

      <label className="font-medium">Nickname
        <input
          type="text"
          className="mt-1 block w-full rounded border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none p-2"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>

      <label className="font-medium">Email
        <input
          type="email"
          className="mt-1 block w-full rounded border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none p-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="font-medium">Password
        <input
          type="password"
          className="mt-1 block w-full rounded border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none p-2"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>

      <label className="font-medium">Confirm Password
        <input
          type="password"
          className="mt-1 block w-full rounded border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none p-2"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          required
        />
      </label>

      {error && (
        <div className="text-red-600 text-sm" role="alert">{error}</div>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Registering…' : 'Register'}
      </button>

      <button
        type="button"
        className="text-blue-600 underline text-sm mt-2"
        onClick={onSwitchToLogin}
      >
        Already have an account? Login
      </button>
    </form>
  );
};

export default RegisterPage;