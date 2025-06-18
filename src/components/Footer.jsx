import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">IA Generativa</h3>
            <p className="text-gray-600">
              Innovando con ética y responsabilidad
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-500 transform hover:scale-110">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-500 transform hover:scale-110">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-500 transform hover:scale-110">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500">
          <p>© 2023 IA Generativa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
