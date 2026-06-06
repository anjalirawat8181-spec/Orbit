export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
export type CourseStatus = 'locked' | 'in-progress' | 'completed';
export type Track = 'GenAI' | 'MLOps' | 'CV' | 'NLP' | 'Foundations';

export interface Course {
  id: string;
  title: string;
  track: Track;
  level: CourseLevel;
  durationHours: number;
  tags: string[];
  description: string;
  status: CourseStatus;
  progressPercent: number;
}

export interface LearnerStats {
  name: string;
  streakDays: number;
  coursesCompleted: number;
  totalHoursLearned: number;
  currentCourseId: string;
  xpPoints: number;
}

export interface FilterState {
  track: Track | 'All';
  level: CourseLevel | 'All';
  searchQuery: string;
}

export interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
