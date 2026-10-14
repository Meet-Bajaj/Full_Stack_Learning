export interface Module {
  id: string;
  name: string;
  phase: string;
  description: string;
  estimatedHours: number;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
}

export interface MCQ {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  difficulty: string;
  topic: string;
}

export interface Progress {
  completedModules: string[];
  completedLessons: string[];
  scores: Record<string, number>;
}
