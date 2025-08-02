import { useState, useEffect } from 'react';
import type { Lesson } from '../types';
import { apiService } from '../services/api';

export const useLessons = (moduleId?: string) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLessons = async () => {
    setLoading(true);
    setError(null);
    try {
      let data: Lesson[];
      if (moduleId) {
        data = await apiService.lessons.getByModuleId(moduleId);
      } else {
        data = await apiService.lessons.getAll();
      }
      setLessons(data);
    } catch (err) {
      setError('Error al cargar las lecciones');
    } finally {
      setLoading(false);
    }
  };

  const createLesson = async (lessonData: Omit<Lesson, 'id' | 'createdAt' | 'updatedAt'>) => {
    setLoading(true);
    setError(null);
    try {
      const newLesson = await apiService.lessons.create(lessonData);
      if (newLesson) {
        setLessons(prev => [...prev, newLesson]);
      }
      return newLesson;
    } catch (err) {
      setError('Error al crear la lección');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateLesson = async (id: string, lessonData: Partial<Lesson>) => {
    setLoading(true);
    setError(null);
    try {
      const updatedLesson = await apiService.lessons.update(id, lessonData);
      if (updatedLesson) {
        setLessons(prev => prev.map(lesson => 
          lesson.id === id ? updatedLesson : lesson
        ));
      }
      return updatedLesson;
    } catch (err) {
      setError('Error al actualizar la lección');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteLesson = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await apiService.lessons.delete(id);
      setLessons(prev => prev.filter(lesson => lesson.id !== id));
    } catch (err) {
      setError('Error al eliminar la lección');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLessons();
  }, [moduleId]);

  return {
    lessons,
    loading,
    error,
    fetchLessons,
    createLesson,
    updateLesson,
    deleteLesson
  };
}; 