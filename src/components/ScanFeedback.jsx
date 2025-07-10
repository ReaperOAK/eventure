
const statusStyles = {
  success: 'bg-green-100 text-green-700 border-green-400',
  error: 'bg-red-100 text-red-700 border-red-400',
  info: 'bg-blue-100 text-blue-700 border-blue-400',
};
const ScanFeedback = ({ status, message }) => (
  <div
    className={`border px-4 py-2 rounded mt-2 text-sm ${statusStyles[status]}`}
    role={status === 'error' ? 'alert' : 'status'}
    aria-live={status === 'error' ? 'assertive' : 'polite'}
  >
    {message}
  </div>
);

export default ScanFeedback;
