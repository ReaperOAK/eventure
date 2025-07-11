import { useState, useEffect } from 'react';
import {
  addCheckpoint,
  getCheckpoints,
  editCheckpoint,
  deleteCheckpoint
} from '../services/checkpointService'; // <-- Import your service functions
import { Timestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { QRCodeCanvas } from 'qrcode.react';

const initialForm = {
  name: '',
  uuid: '',
  lat: '',
  long: '',
  startTime: '',
  endTime: '',
};

const AdminPanel = () => {
  const [checkpoints, setCheckpoints] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState('');
  const [editId, setEditId] = useState(null);

  // Fetch checkpoints on mount
  useEffect(() => {
    refreshCheckpoints();
  }, []);

  const refreshCheckpoints = async () => {
    try {
      const data = await getCheckpoints();
      setCheckpoints(data);
    } catch (err) {
      setMessage('Failed to fetch checkpoints!');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update checkpoint
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.lat || !form.long || !form.startTime || !form.endTime) {
      setMessage('All fields are required.');
      return;
    }
    
    const checkpointData = {
      name: form.name,
      uuid: editId ? form.uuid : uuidv4(), // 👈 Only generate if creating new ✅ secure identifier for QR code
      location: { lat: parseFloat(form.lat), long: parseFloat(form.long) },
      startTime: Timestamp.fromDate(new Date(form.startTime)), // Converts string to Timestamp
      endTime: Timestamp.fromDate(new Date(form.endTime))
    };

    console.log("Parsed coords:", parseFloat(form.lat), parseFloat(form.long));
    console.log("Start:", new Date(form.startTime));
    console.log("End:", new Date(form.endTime));
    console.log("Saving checkpoint:", checkpointData);
    try {  
      if (editId) {
        await editCheckpoint(editId, checkpointData);
        setMessage('Checkpoint updated!');
      } else {
        await addCheckpoint(checkpointData);
        setMessage('Checkpoint added!');
      }
      setForm(initialForm);
      setEditId(null);
      refreshCheckpoints();
    } catch (err) {
      setMessage('Error saving checkpoint!');
    }
  };

  const handleEdit = (cp) => {
    setEditId(cp.id);
    setForm({
      name: cp.name,
      lat: cp.location.lat,
      long: cp.location.long,
      startTime: cp.startTime,
      endTime: cp.endTime
    });
    setMessage('');
  };

  const handleDelete = async (id) => {
    try {
      await deleteCheckpoint(id);
      setMessage('Checkpoint deleted!');
      refreshCheckpoints();
    } catch (err) {
      setMessage('Error deleting checkpoint!');
    }
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setForm(initialForm);
    setMessage('');
  };

  return (
    <section className="w-full max-w-lg mx-auto p-4 flex flex-col gap-8">
      <h2 className="text-xl font-semibold text-center">Admin Panel</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-4 flex flex-col gap-4">
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
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition">
            {editId ? 'Update Checkpoint' : 'Add Checkpoint'}
          </button>
          {editId && (
            <button type="button" className="bg-gray-400 text-white py-2 rounded" onClick={handleCancelEdit}>
              Cancel
            </button>
          )}
        </div>
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
                <span className="text-xs text-gray-500">Lat: {cp.location.lat}, Long: {cp.location.long}</span>
                <span className="text-xs text-gray-500">
                    {cp.startTime && cp.startTime.toDate
                      ? cp.startTime.toDate().toLocaleString()
                      : cp.startTime}
                       →
                      {cp.endTime && cp.endTime.toDate
                      ? cp.endTime.toDate().toLocaleString()
                      : cp.endTime}
                </span>
                  {/* ✅ QR Code Section */}
                  <div className="mt-2 flex flex-col items-start">
                        <QRCodeCanvas value={cp.uuid} size={128} />
                        <p className="text-xs mt-1 text-gray-500 break-all">UUID: {cp.uuid}</p>
                  </div>
                <div className="flex gap-2 mt-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded" onClick={() => handleEdit(cp)}>Edit</button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={() => handleDelete(cp.id)}>Delete</button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default AdminPanel;