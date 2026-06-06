import { motion } from 'framer-motion';
import { Course } from '../types';

interface PathNodeProps {
  course: Course;
  index: number;
}

export const PathNode = ({ course, index }: PathNodeProps) => {
  const isDone = course.status === 'completed';
  const isActive = course.status === 'in-progress';
  const isLocked = course.status === 'locked';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.35, ease: 'easeOut' }}
      className={`relative bg-white border rounded-xl p-4 flex gap-4 items-start
        ${isDone ? 'border-green-200' : ''}
        ${isActive ? 'border-violet-400' : ''}
        ${isLocked ? 'border-gray-200 opacity-60' : ''}
      `}
    >
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 mt-0.5
          ${isDone ? 'bg-green-500 text-white' : ''}
          ${isActive ? 'bg-violet-600 text-white' : ''}
          ${isLocked ? 'bg-gray-100 text-gray-400' : ''}
        `}
      >
        {isDone ? '✓' : isLocked ? '🔒' : index + 1}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h3 className="text-sm font-semibold text-gray-900">{course.title}</h3>
          <span className="text-xs text-gray-400 shrink-0">{course.durationHours}h</span>
        </div>
        <p className="text-xs text-gray-500 mt-0.5">{course.level}</p>

        {isActive && (
          <div className="mt-3 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-violet-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${course.progressPercent}%` }}
              transition={{ delay: index * 0.08 + 0.3, duration: 0.6, ease: 'easeOut' }}
            />
          </div>
        )}

        <div className="flex gap-1 flex-wrap mt-2">
          {course.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
