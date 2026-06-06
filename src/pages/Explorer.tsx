import { useState } from 'react';
import { FilterState } from '../types';
import { useCourses } from '../hooks/useCourses';
import { CourseCard } from '../components/CourseCard';
import { SkeletonCard } from '../components/SkeletonCard';
import { FilterBar } from '../components/FilterBar';
import { ErrorState } from '../components/ErrorState';

const defaultFilters: FilterState = {
  track: 'All',
  level: 'All',
  searchQuery: '',
};

export const Explorer = () => {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const { data, loading, error, retry } = useCourses(filters);

  return (
    <div className="pt-20 pb-16 px-4 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <div className="mt-8 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Course Explorer</h1>
        <p className="text-gray-500 text-sm mt-1">Browse all AI tracks and courses</p>
      </div>

      <div className="mb-6">
        <FilterBar filters={filters} onChange={setFilters} />
      </div>

      {error ? (
        <ErrorState message={error} onRetry={retry} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : data && data.length > 0
            ? data.map((course) => <CourseCard key={course.id} course={course} />)
            : (
              <div className="col-span-full py-16 text-center text-gray-500 text-sm bg-white border border-gray-200 rounded-xl">
                No courses match your filters.
              </div>
            )}
        </div>
      )}
    </div>
  );
};
