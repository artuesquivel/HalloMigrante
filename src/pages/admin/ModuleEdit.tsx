import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ModuleEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h2 fw-bold mb-0">Editar Módulo</h1>
            <Link to="/admin/modules" className="btn btn-outline-secondary">
              <i className="bi bi-arrow-left me-2"></i>
              Volver
            </Link>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Información del Módulo</h5>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                <i className="bi bi-info-circle me-2"></i>
                Formulario de edición de módulo - Contenido pendiente
                <br />
                <small>ID del módulo: {id}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleEdit; 