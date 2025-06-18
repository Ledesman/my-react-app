import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Tutorial = () => {
  const steps = [
    {
      id: 1,
      title: 'Paso 1: Inicia sesión',
      description: 'Crea una cuenta o inicia sesión en nuestra plataforma para acceder a todas las funcionalidades.',
      icon: 'bi-person-circle'
    },
    {
      id: 2,
      title: 'Paso 2: Explora las herramientas',
      description: 'Navega por nuestra colección de herramientas de IA y selecciona la que mejor se adapte a tus necesidades.',
      icon: 'bi-tools'
    },
    {
      id: 3,
      title: 'Paso 3: Configura tu solicitud',
      description: 'Ajusta los parámetros según tus preferencias y necesidades específicas.',
      icon: 'bi-gear'
    },
    {
      id: 4,
      title: 'Paso 4: Genera y personaliza',
      description: 'Obtén resultados instantáneos y personalízalos según tus requerimientos.',
      icon: 'bi-magic'
    },
    {
      id: 5,
      title: 'Paso 5: Exporta y comparte',
      description: 'Descarga tus creaciones o compártelas directamente desde la plataforma.',
      icon: 'bi-share'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tutoriales y Guías</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Aprende a sacar el máximo provecho de nuestras herramientas de IA con nuestra guía paso a paso</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/" 
              className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center"
            >
              <i className="bi bi-arrow-left mr-2"></i> Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      {/* Tutorial Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Guía Paso a Paso</h2>
          
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex flex-col md:flex-row mb-12 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center">
                    <i className={`bi ${step.icon} text-5xl text-indigo-600`}></i>
                  </div>
                </div>
                <div className="md:w-2/3 px-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">¿Listo para comenzar?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Explora nuestras herramientas y descubre cómo la IA puede potenciar tu productividad y creatividad.</p>
          <Link 
            to="/" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full inline-flex items-center transition-all duration-300"
          >
            <i className="bi bi-lightning-charge-fill mr-2"></i>
            Empezar ahora
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tutorial;
