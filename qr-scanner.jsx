
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import axios from 'axios';

const QRScanner = () => {
  const [data, setData] = useState('');
  const [userId, setUserId] = useState('user123'); // set dynamically in real app
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState('');

  // Get geolocation
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }),
        err => setError("Location permission denied")
      );
    } else {
      setError("Geolocation not supported");
    }
  };

  const handleScan = async (scanData) => {
    if (scanData) {
      setData(scanData);
      getLocation();

      try {
        const response = await axios.post('/api/scan', {
          qr_code: scanData,
          user_id: userId,
          location
        });
        alert(`Scan successful: ${response.data.scan_id}`);
      } catch (err) {
        setError(err.response?.data?.detail || "Scan failed");
      }
    }
  };

  return (
    <div className="p-4">
      <h2>QR Code Scanner</h2>
      <QrReader
        constraints={{ facingMode: 'environment' }}
        onResult={(result, error) => {
          if (!!result) {
            handleScan(result?.text);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>Scanned: {data}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default QRScanner;
