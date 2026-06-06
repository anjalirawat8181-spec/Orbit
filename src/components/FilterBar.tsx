import { FilterState, Track, CourseLevel } from '../types';

interface FilterBarProps {
  filters: FilterState;
  onChange: (f: FilterState) => void;
}

const tracks: Array<Track | 'All'> = ['All', 'Foundations', 'GenAI', 'MLOps', 'CV', 'NLP'];
const levels: Array<CourseLevel | 'All'> = ['All', 'beginner', 'intermediate', 'advanced'];

const inputClass =
  'border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition';

export const FilterBar = ({ filters, onChange }: FilterBarProps) => (
  <div className="flex flex-col sm:flex-row gap-3">
    <input
      type="text"
      placeholder="Search courses..."
      value={filters.searchQuery}
      onChange={(e) => onChange({ ...filters, searchQuery: e.target.value })}
      className={`${inputClass} w-full sm:w-72`}
    />
    <select
      value={filters.track}
      onChange={(e) => onChange({ ...filters, track: e.target.value as Track | 'All' })}
      className={`${inputClass} w-full sm:w-auto`}
    >
      {tracks.map((t) => (
        <option key={t} value={t}>
          {t === 'All' ? 'All tracks' : t}
        </option>
      ))}
    </select>
    <select
      value={filters.level}
      onChange={(e) => onChange({ ...filters, level: e.target.value as CourseLevel | 'All' })}
      className={`${inputClass} w-full sm:w-auto`}
    >
      {levels.map((l) => (
        <option key={l} value={l}>
          {l === 'All' ? 'All levels' : l}
        </option>
      ))}
    </select>
  </div>
);
