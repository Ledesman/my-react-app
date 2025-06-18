import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Inteligencia Artificial Avanzada',
      description: 'Nuestro chatbot utiliza IA de última generación para entender y responder tus preguntas de manera natural.',
      icon: '🤖'
    },
    {
      title: 'Respuestas Instantáneas',
      description: 'Obtén respuestas rápidas y precisas a tus preguntas, sin esperas innecesarias.',
      icon: '⚡'
    },
    {
      title: 'Multiidioma',
      description: 'Comunícate en el idioma que prefieras, nuestro chatbot te entiende en múltiples idiomas.',
      icon: '🌐'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Características Principales</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
