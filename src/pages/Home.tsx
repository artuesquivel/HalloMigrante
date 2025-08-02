import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4 fw-bold text-primary mb-4">
            Bienvenido a Hallo Alemania
          </h1>
          <p className="lead mb-4">
            Tu plataforma completa para la migración a Alemania. 
            Aprende todo lo que necesitas saber para vivir y trabajar en Alemania.
          </p>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <Link to="/modules" className="btn btn-primary btn-lg px-4 gap-3">
              Ver Módulos
            </Link>
            <Link to="/admin/modules" className="btn btn-outline-secondary btn-lg px-4">
              Administrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 