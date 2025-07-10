
import ProgressList from '../components/ProgressList';

// Placeholder data for now
const sampleCheckpoints = [
  { id: 'cp_1', name: 'Robo Arena' },
  { id: 'cp_2', name: 'Code Hunt' },
];
const totalCheckpoints = 8;

const ProgressPage = () => {
  // In real app, fetch user progress and total checkpoints
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <ProgressList checkpoints={sampleCheckpoints} total={totalCheckpoints} />
    </div>
  );
};

export default ProgressPage;
