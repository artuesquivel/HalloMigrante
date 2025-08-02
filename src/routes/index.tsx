import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Pages
import Home from '../pages/Home';
import ModulesList from '../pages/ModulesList';

// Admin Pages
import ModulesAdmin from '../pages/admin/ModulesAdmin';
import ModuleCreate from '../pages/admin/ModuleCreate';
import ModuleEdit from '../pages/admin/ModuleEdit';
import LessonsAdmin from '../pages/admin/LessonsAdmin';
import LessonCreate from '../pages/admin/LessonCreate';
import LessonEdit from '../pages/admin/LessonEdit';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<ModulesList />} />
          
          {/* Admin Routes */}
          <Route path="/admin/modules" element={<ModulesAdmin />} />
          <Route path="/admin/modules/create" element={<ModuleCreate />} />
          <Route path="/admin/modules/edit/:id" element={<ModuleEdit />} />
          <Route path="/admin/lessons" element={<LessonsAdmin />} />
          <Route path="/admin/lessons/create" element={<LessonCreate />} />
          <Route path="/admin/lessons/edit/:id" element={<LessonEdit />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes; 