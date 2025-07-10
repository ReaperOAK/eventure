
import React, { useState } from 'react';

interface QRScannerProps {
  onScan?: (data: string) => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScan }) => {
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<string | null>(null);

  // Placeholder for actual QR scan logic
  const handleStart = () => {
    setScanning(true);
    setError('');
    setTimeout(() => {
      // Simulate scan result
      const fakeData = 'sample-qr-token-123';
      setResult(fakeData);
      setScanning(false);
      if (onScan) onScan(fakeData);
    }, 2000);
  };

  return (
    <section className="flex flex-col items-center gap-6 w-full max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold">Scan QR Code</h2>
      {!scanning && !result && (
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition"
          onClick={handleStart}
          aria-label="Start QR Scan"
        >
          Start Scanning
        </button>
      )}
      {scanning && (
        <div className="flex flex-col items-center gap-2">
          <div className="w-40 h-40 bg-gray-200 rounded flex items-center justify-center animate-pulse">
            <span className="text-gray-500">[Camera View]</span>
          </div>
          <span className="text-blue-600 font-medium">Scanning…</span>
        </div>
      )}
      {result && (
        <div className="flex flex-col items-center gap-2">
          <div className="w-40 h-40 bg-green-100 rounded flex items-center justify-center">
            <span className="text-green-700 font-bold">QR Scanned!</span>
          </div>
          <span className="text-gray-700 text-sm break-all">{result}</span>
          <button
            className="mt-2 text-blue-600 underline"
            onClick={() => { setResult(null); setError(''); }}
          >
            Scan Another
          </button>
        </div>
      )}
      {error && (
        <div className="text-red-600" role="alert">{error}</div>
      )}
    </section>
  );
};

export default QRScanner;
