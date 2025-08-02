import React from 'react';
import { Link } from 'react-router-dom';

const ModulesAdmin: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h2 fw-bold mb-0">Administrar Módulos</h1>
            <Link to="/admin/modules/create" className="btn btn-primary">
              <i className="bi bi-plus-circle me-2"></i>
              Nuevo Módulo
            </Link>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Lista de Módulos</h5>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                <i className="bi bi-info-circle me-2"></i>
                Tabla de módulos - Contenido pendiente
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulesAdmin; 