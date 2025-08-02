import { useState, useEffect } from 'react';
import type { Module } from '../types';
import { apiService } from '../services/api';

export const useModules = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchModules = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiService.modules.getAll();
      setModules(data);
    } catch (err) {
      setError('Error al cargar los módulos');
    } finally {
      setLoading(false);
    }
  };

  const createModule = async (moduleData: Omit<Module, 'id' | 'createdAt' | 'updatedAt'>) => {
    setLoading(true);
    setError(null);
    try {
      const newModule = await apiService.modules.create(moduleData);
      if (newModule) {
        setModules(prev => [...prev, newModule]);
      }
      return newModule;
    } catch (err) {
      setError('Error al crear el módulo');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateModule = async (id: string, moduleData: Partial<Module>) => {
    setLoading(true);
    setError(null);
    try {
      const updatedModule = await apiService.modules.update(id, moduleData);
      if (updatedModule) {
        setModules(prev => prev.map(module => 
          module.id === id ? updatedModule : module
        ));
      }
      return updatedModule;
    } catch (err) {
      setError('Error al actualizar el módulo');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteModule = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await apiService.modules.delete(id);
      setModules(prev => prev.filter(module => module.id !== id));
    } catch (err) {
      setError('Error al eliminar el módulo');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModules();
  }, []);

  return {
    modules,
    loading,
    error,
    fetchModules,
    createModule,
    updateModule,
    deleteModule
  };
}; 