import { Course, LearnerStats } from '../types';

export const MOCK_COURSES: Course[] = [
  {
    id: 'c1', title: 'Python for AI', track: 'Foundations',
    level: 'beginner', durationHours: 12, status: 'completed',
    progressPercent: 100, tags: ['Python', 'NumPy', 'Pandas'],
    description: 'Core Python skills every AI engineer needs.'
  },
  {
    id: 'c2', title: 'Machine Learning Fundamentals', track: 'Foundations',
    level: 'intermediate', durationHours: 20, status: 'in-progress',
    progressPercent: 65, tags: ['scikit-learn', 'regression', 'classification'],
    description: 'Supervised and unsupervised learning from scratch.'
  },
  {
    id: 'c3', title: 'Prompt Engineering & LLMs', track: 'GenAI',
    level: 'intermediate', durationHours: 8, status: 'locked',
    progressPercent: 0, tags: ['LLMs', 'GPT', 'RAG'],
    description: 'Build production-grade prompts and retrieval systems.'
  },
  {
    id: 'c4', title: 'Computer Vision with PyTorch', track: 'CV',
    level: 'advanced', durationHours: 25, status: 'locked',
    progressPercent: 0, tags: ['PyTorch', 'CNNs', 'YOLO'],
    description: 'Train and deploy vision models end to end.'
  },
  {
    id: 'c5', title: 'MLOps Fundamentals', track: 'MLOps',
    level: 'intermediate', durationHours: 15, status: 'locked',
    progressPercent: 0, tags: ['Docker', 'CI/CD', 'model serving'],
    description: 'Ship models reliably with modern MLOps practices.'
  },
  {
    id: 'c6', title: 'NLP with Transformers', track: 'NLP',
    level: 'advanced', durationHours: 22, status: 'locked',
    progressPercent: 0, tags: ['HuggingFace', 'BERT', 'fine-tuning'],
    description: 'Fine-tune transformer models for real NLP tasks.'
  },
];

export const MOCK_LEARNER: LearnerStats = {
  name: 'Anjali',
  streakDays: 7,
  coursesCompleted: 1,
  totalHoursLearned: 24,
  currentCourseId: 'c2',
  xpPoints: 1340,
};
