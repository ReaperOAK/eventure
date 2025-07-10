
import React from 'react';

interface ProgressListProps {
  checkpoints: { id: string; name: string }[];
  total: number;
}

const ProgressList: React.FC<ProgressListProps> = ({ checkpoints, total }) => {
  const percent = total > 0 ? Math.round((checkpoints.length / total) * 100) : 0;
  return (
    <section className="w-full max-w-md mx-auto p-4 flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-center">My Progress</h2>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full transition-all"
          style={{ width: `${percent}%` }}
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        />
      </div>
      <div className="text-center text-gray-700">{checkpoints.length} / {total} checkpoints completed ({percent}%)</div>
      <ul className="divide-y divide-gray-200 bg-white rounded shadow">
        {checkpoints.length === 0 ? (
          <li className="p-4 text-gray-400 text-center">No checkpoints completed yet.</li>
        ) : (
          checkpoints.map(cp => (
            <li key={cp.id} className="p-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block" aria-hidden="true" />
              <span className="font-medium">{cp.name}</span>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default ProgressList;
