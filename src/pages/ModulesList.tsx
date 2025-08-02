import React from 'react';

const ModulesList: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="h2 fw-bold mb-4">Módulos Disponibles</h1>
          <p className="text-muted mb-4">
            Explora nuestros módulos de migración a Alemania
          </p>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          <div className="alert alert-info">
            <i className="bi bi-info-circle me-2"></i>
            Lista de módulos - Contenido pendiente
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulesList; 