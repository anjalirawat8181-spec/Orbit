import { useState, useEffect, useCallback } from 'react';
import { Course, FilterState, ApiResponse } from '../types';
import { MOCK_COURSES } from '../data/mockData';

const fakeFetch = (): Promise<Course[]> =>
  new Promise((resolve) => setTimeout(() => resolve(MOCK_COURSES), 1500));

export const useCourses = (
  filters: FilterState
): ApiResponse<Course[]> & { retry: () => void } => {
  const [data, setData] = useState<Course[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fakeFetch()
      .then((courses) => {
        const filtered = courses.filter((c) => {
          const matchTrack = filters.track === 'All' || c.track === filters.track;
          const matchLevel = filters.level === 'All' || c.level === filters.level;
          const matchSearch = c.title
            .toLowerCase()
            .includes(filters.searchQuery.toLowerCase());
          return matchTrack && matchLevel && matchSearch;
        });
        setData(filtered);
      })
      .catch(() => setError('Failed to load courses. Please try again.'))
      .finally(() => setLoading(false));
  }, [filters, attempt]);

  return { data, loading, error, retry };
};
