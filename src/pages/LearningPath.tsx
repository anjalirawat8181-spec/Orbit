import { useState } from 'react';
import { Track } from '../types';
import { MOCK_COURSES } from '../data/mockData';
import { PathNode } from '../components/PathNode';

const tracks: Track[] = ['Foundations', 'GenAI', 'MLOps', 'CV', 'NLP'];

const statusOrder = { completed: 0, 'in-progress': 1, locked: 2 } as const;

export const LearningPath = () => {
  const [activeTrack, setActiveTrack] = useState<Track>('Foundations');

  const courses = MOCK_COURSES
    .filter((c) => c.track === activeTrack)
    .sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

  return (
    <div className="pt-20 pb-16 px-4 max-w-2xl mx-auto bg-gray-50 min-h-screen">
      <div className="mt-8 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Learning Path</h1>
        <p className="text-gray-500 text-sm mt-1">Your roadmap through each AI track</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {tracks.map((track) => (
          <button
            key={track}
            onClick={() => setActiveTrack(track)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeTrack === track
                ? 'bg-violet-600 text-white border-violet-600'
                : 'bg-white text-gray-600 border-gray-200 hover:border-violet-300 hover:text-violet-600'
            }`}
          >
            {track}
          </button>
        ))}
      </div>

      {courses.length === 0 ? (
        <p className="text-gray-400 text-sm text-center py-12">
          No courses in this track yet.
        </p>
      ) : (
        <div className="relative">
          <div className="absolute left-[22px] top-9 bottom-9 w-px border-l-2 border-dashed border-gray-200" />

          <div className="flex flex-col gap-4">
            {courses.map((course, i) => (
              <PathNode key={course.id} course={course} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
