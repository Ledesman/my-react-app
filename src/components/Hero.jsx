import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-white to-gray-50 overflow-hidden">
      {/* Efecto de fondo decorativo */}
      <div className="position-absolute w-100 h-100" style={{
        background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29-22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23e5e7eb\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        opacity: 0.6,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0
      }}></div>
      
      <div className="container position-relative py-5 py-lg-7">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">
              <span className="text-primary">Eduplata</span> Soluciones
            </h1>
            <p className="lead text-muted mb-4">
            Somos una consultora en tecnología educativa que impulsa la transformación del aprendizaje con soluciones digitales innovadoras. 
            Diseñamos recursos interactivos, capacitamos docentes, evaluamos programas educativos y acompañamos a instituciones en la integración 
            efectiva de la tecnología en el aula. 
            Creemos en la innovación y la investigación para construir una educación más accesible y dinámica.
            </p>
            
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <a 
                href="https://open.spotify.com/episode/4pfUDlsazk9yGraRr1EPCF?si=qPpQuMd-QWqaINLVm9A_UA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg px-4 py-3 fw-semibold rounded-pill shadow-sm text-decoration-none"
                style={{
                  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  color: 'white'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 20px rgba(79, 70, 229, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <i className="bi bi-mic-fill me-2"></i>
                Empezar ahora escuchar audio
              </a>
              
              <a 
                href="https://www.youtube.com/watch?v=yBb8RErNPN4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-lg px-4 py-3 fw-semibold rounded-pill"
                style={{
                  borderWidth: '2px',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <i className="bi bi-play-circle me-2"></i>
                Ver video tutorial
              </a>
            </div>
            
            <div className="mt-4 d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
              <div className="d-flex align-items-center text-muted">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <span>Fácil de usar</span>
              </div>
              <div className="d-flex align-items-center text-muted">
                <i className="bi bi-lightning-charge-fill text-warning me-2"></i>
                <span>Rápido y potente</span>
              </div>
              <div className="d-flex align-items-center text-muted">
                <i className="bi bi-shield-lock-fill text-primary me-2"></i>
                <span>Seguro y privado</span>
              </div>
            </div>
          </div>
          
          <div className="col-lg-5 d-none d-lg-block">
            <div className="position-relative">
              <div className="position-relative z-2 p-4 bg-white rounded-4 shadow-sm" style={{
                transform: 'rotate(-2deg)'
              }}>
                <div className="bg-light p-3 rounded-3 mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <div className="me-2">
                      <div className="bg-primary rounded-circle" style={{width: '30px', height: '30px'}}></div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="bg-light rounded-pill" style={{height: '10px', width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-3">
                    <div className="bg-light rounded-pill mb-2" style={{height: '8px', width: '100%'}}></div>
                    <div className="bg-light rounded-pill mb-2" style={{height: '8px', width: '90%'}}></div>
                    <div className="bg-light rounded-pill" style={{height: '8px', width: '95%'}}></div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="bg-light rounded-pill me-2" style={{height: '40px', width: '40px'}}></div>
                  <div className="flex-grow-1">
                    <div className="bg-light rounded-pill" style={{height: '40px', width: '100%'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Efecto decorativo */}
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 rounded-4" style={{
                transform: 'rotate(2deg) translate(10px, 10px)'
              }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ola decorativa en la parte inferior */}
      <div className="position-relative" style={{height: '150px', overflow: 'hidden'}}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="position-absolute bottom-0 w-100" style={{
          height: '100%',
          fill: '#ffffff',
          transform: 'rotate(180deg)'
        }}>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
