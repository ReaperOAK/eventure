
const Leaderboard = ({ entries }) => {
  return (
    <section className="w-full max-w-md mx-auto p-4 flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-center">Leaderboard</h2>
      <ol className="bg-white rounded shadow divide-y divide-gray-200">
        {entries.length === 0 ? (
          <li className="p-4 text-gray-400 text-center">No participants yet.</li>
        ) : (
          entries.map((entry, idx) => (
            <li key={entry.id} className="flex items-center gap-4 p-4">
              <span className="font-bold text-lg w-6 text-right">{idx + 1}</span>
              <span className="flex-1 font-medium">{entry.name}</span>
              <span className="bg-blue-100 text-blue-700 rounded px-2 py-1 text-sm">{entry.score} pts</span>
            </li>
          ))
        )}
      </ol>
    </section>
  );
};

export default Leaderboard;
