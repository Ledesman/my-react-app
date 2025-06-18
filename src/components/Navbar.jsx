import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Efecto para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Verificar si la ruta está activa
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top transition-all ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-3'}`}
      style={{
        transition: 'all 0.3s ease-in-out',
        zIndex: 1030
      }}
    >
      <div className="container">
        {/* Logo y nombre */}
        <Link 
          to="/" 
          className="navbar-brand d-flex align-items-center"
          style={{
            fontWeight: 700,
            fontSize: '1.5rem',
            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }}
        >
          <i className="bi bi-robot me-2"></i>
          IAGen
        </Link>

        {/* Botón para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          style={{
            border: 'none',
            boxShadow: 'none',
            padding: '0.5rem',
          }}
        >
          <span className="navbar-toggler-icon">
            <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'}`} style={{ fontSize: '1.5rem' }}></i>
          </span>
        </button>

        {/* Menú de navegación */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item mx-2">
              <Link 
                to="/" 
                className={`nav-link position-relative px-3 ${isActive('/') ? 'active' : ''}`}
                style={{
                  fontWeight: 500,
                  color: isActive('/') ? '#4f46e5' : '#4b5563',
                  transition: 'all 0.3s ease'
                }}
              >
                Inicio
                {isActive('/') && (
                  <span className="position-absolute bottom-0 start-0 w-100 bg-primary" style={{
                    height: '3px',
                    borderRadius: '3px',
                    transform: 'scaleX(0.7)',
                  }}></span>
                )}
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link 
                to="/blog" 
                className={`nav-link position-relative px-3 ${isActive('/blog') ? 'active' : ''}`}
                style={{
                  fontWeight: 500,
                  color: isActive('/blog') ? '#4f46e5' : '#4b5563',
                  transition: 'all 0.3s ease'
                }}
              >
                Blog
                {isActive('/blog') && (
                  <span className="position-absolute bottom-0 start-0 w-100 bg-primary" style={{
                    height: '3px',
                    borderRadius: '3px',
                    transform: 'scaleX(0.7)',
                  }}></span>
                )}
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link 
                to="/contact" 
                className={`nav-link position-relative px-3 ${isActive('/contact') ? 'active' : ''}`}
                style={{
                  fontWeight: 500,
                  color: isActive('/contact') ? '#4f46e5' : '#4b5563',
                  transition: 'all 0.3s ease'
                }}
              >
                Contacto
                {isActive('/contact') && (
                  <span className="position-absolute bottom-0 start-0 w-100 bg-primary" style={{
                    height: '3px',
                    borderRadius: '3px',
                    transform: 'scaleX(0.7)',
                  }}></span>
                )}
              </Link>
            </li>
            <li className="nav-item ms-2 d-none d-lg-block">
              <Link 
                to="/demo" 
                className="btn btn-primary rounded-pill px-4 fw-medium"
                style={{
                  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  border: 'none',
                  boxShadow: '0 4px 10px rgba(79, 70, 229, 0.3)',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 15px rgba(79, 70, 229, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 10px rgba(79, 70, 229, 0.3)';
                }}
              >
                Probar Ahora
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
