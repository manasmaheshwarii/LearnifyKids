export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  type: 'kid' | 'parent';
  parentId?: string;
  level: number;
  points: number;
  badges: Badge[];
  enrolledCourses: string[];
  completedCourses: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  ageRange: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  thumbnail: string;
  modules: Module[];
  color: string;
  isCompleted?: boolean;
  progress?: number;
}

export interface Module {
  id: string;
  title: string;
  type: 'video' | 'quiz' | 'game' | 'certificate';
  videoUrl?: string;
  duration?: string;
  description?: string;
  quizQuestions?: QuizQuestion[];
  isCompleted?: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  earnedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  courseCount: number;
}