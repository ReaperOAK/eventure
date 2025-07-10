import React from 'react';
import QRScanner from '../components/QRScanner';

const ScanPage: React.FC = () => {
  // Placeholder for scan result handling
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <QRScanner />
    </div>
  );
};

export default ScanPage;
