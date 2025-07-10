
import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div
    className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative text-sm mt-2"
    role="alert"
    aria-live="assertive"
  >
    <span className="font-semibold">Error: </span>{message}
  </div>
);

export default ErrorMessage;
