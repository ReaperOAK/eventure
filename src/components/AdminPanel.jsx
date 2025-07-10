import { useState } from 'react';

const AdminPanel = () => {
  // Placeholder state for checkpoints
  const [checkpoints, setCheckpoints] = useState([]);
  const [form, setForm] = useState({
    name: '',
    lat: '',
    long: '',
    startTime: '',
    endTime: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.lat || !form.long || !form.startTime || !form.endTime) {
      setMessage('All fields are required.');
      return;
    }
    setCheckpoints([
      ...checkpoints,
      {
        id: `cp_${Date.now()}`,
        name: form.name,
        lat: parseFloat(form.lat),
        long: parseFloat(form.long),
        startTime: form.startTime,
        endTime: form.endTime,
      },
    ]);
    setForm({ name: '', lat: '', long: '', startTime: '', endTime: '' });
    setMessage('Checkpoint added!');
  };

  return (
    <section className="w-full max-w-lg mx-auto p-4 flex flex-col gap-8">
      <h2 className="text-xl font-semibold text-center">Admin Panel</h2>
      <form onSubmit={handleAdd} className="bg-white rounded shadow p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="font-medium">Checkpoint Name
            <input name="name" value={form.name} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required />
          </label>
          <label className="font-medium">Latitude
            <input name="lat" value={form.lat} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required type="number" step="any" />
          </label>
          <label className="font-medium">Longitude
            <input name="long" value={form.long} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required type="number" step="any" />
          </label>
          <label className="font-medium">Start Time
            <input name="startTime" value={form.startTime} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required type="datetime-local" />
          </label>
          <label className="font-medium">End Time
            <input name="endTime" value={form.endTime} onChange={handleChange} className="mt-1 p-2 border rounded w-full" required type="datetime-local" />
          </label>
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition">Add Checkpoint</button>
        {message && <div className="text-green-600 text-sm" role="alert">{message}</div>}
      </form>
      <div>
        <h3 className="font-semibold mb-2">Existing Checkpoints</h3>
        <ul className="divide-y divide-gray-200 bg-white rounded shadow">
          {checkpoints.length === 0 ? (
            <li className="p-4 text-gray-400 text-center">No checkpoints yet.</li>
          ) : (
            checkpoints.map(cp => (
              <li key={cp.id} className="p-4 flex flex-col gap-1">
                <span className="font-medium">{cp.name}</span>
                <span className="text-xs text-gray-500">Lat: {cp.lat}, Long: {cp.long}</span>
                <span className="text-xs text-gray-500">{cp.startTime} → {cp.endTime}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default AdminPanel;
