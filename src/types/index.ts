export interface Module {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
  duration: string;
  lessonsCount: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  videoUrl?: string;
  duration: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ModuleWithLessons extends Module {
  lessons: Lesson[];
} 