import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const levelColors: Record<Course['level'], string> = {
  beginner: 'bg-green-50 text-green-700',
  intermediate: 'bg-amber-50 text-amber-700',
  advanced: 'bg-red-50 text-red-700',
};

export const CourseCard = ({ course }: CourseCardProps) => {
  const isLocked = course.status === 'locked';
  const isDone = course.status === 'completed';
  const isActive = course.status === 'in-progress';

  return (
    <div
      className={`bg-white border rounded-xl p-5 flex flex-col gap-3 transition-colors ${
        isLocked ? 'opacity-60 border-gray-200' : 'border-gray-200 hover:border-violet-300'
      }`}
    >
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-medium bg-violet-50 text-violet-700 px-2.5 py-0.5 rounded-full">
          {course.track}
        </span>
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${levelColors[course.level]}`}>
          {course.level}
        </span>
        {isDone && <span className="ml-auto text-xs font-medium text-green-600">✓ Completed</span>}
        {isLocked && <span className="ml-auto text-xs text-gray-400">🔒 Locked</span>}
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 text-sm leading-snug">{course.title}</h3>
        <p className="text-gray-500 text-xs mt-1 leading-relaxed">{course.description}</p>
      </div>

      {isActive && (
        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-violet-600 rounded-full transition-all"
            style={{ width: `${course.progressPercent}%` }}
          />
        </div>
      )}

      <div className="flex items-center justify-between mt-auto pt-1 flex-wrap gap-2">
        <span className="text-xs text-gray-400">{course.durationHours}h</span>
        <div className="flex gap-1 flex-wrap justify-end">
          {course.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
