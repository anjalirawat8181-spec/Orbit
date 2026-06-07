import { motion } from 'framer-motion';
import { MOCK_LEARNER, MOCK_COURSES } from '../data/mockData';
import { ProgressRing } from '../components/ProgressRing';
import { CourseCard } from '../components/CourseCard';

const statCards = [
  { icon: '🔥', value: `${MOCK_LEARNER.streakDays} days`, label: 'Current streak' },
  { icon: '⚡', value: `${MOCK_LEARNER.xpPoints} XP`, label: 'Total XP earned' },
  { icon: '⏱', value: `${MOCK_LEARNER.totalHoursLearned}h`, label: 'Hours learned' },
];

export const Dashboard = () => {
  const currentCourse = MOCK_COURSES.find(
    (c) => c.id === MOCK_LEARNER.currentCourseId
  );

  return (
    <motion.div
      key="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-20 px-4 pb-12 bg-gray-50 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {MOCK_LEARNER.name}
          </h1>
          <p className="text-gray-500 mt-1">Here's where you stand today.</p>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          {statCards.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="bg-white rounded-lg p-4 border border-gray-200"
            >
              <div className="text-2xl mb-2">{s.icon}</div>
              <p className="text-xl font-bold text-gray-900">
                {s.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress rings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg p-8 border border-gray-200 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Progress overview</h2>
          <div className="flex justify-around flex-wrap gap-8">
            <ProgressRing
              value={MOCK_LEARNER.coursesCompleted}
              max={6}
              size={96}
              color="#7c3aed"
              label="Courses completed"
            />
            <ProgressRing
              value={MOCK_LEARNER.totalHoursLearned}
              max={100}
              size={96}
              color="#7c3aed"
              label="Learning hours"
            />
            <ProgressRing
              value={Math.min(MOCK_LEARNER.streakDays, 30)}
              max={30}
              size={96}
              color="#7c3aed"
              label="Day streak"
            />
          </div>
        </motion.div>

        {/* Continue learning */}
        {currentCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Continue learning</h2>
            <CourseCard course={currentCourse} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
