import React from 'react';

const EthicalSection = () => {
  const principles = [
    {
      title: 'Privacidad Primero',
      description: 'Tu privacidad es nuestra prioridad. No compartimos tus datos con terceros.',
      icon: '🔒'
    },
    {
      title: 'Transparencia',
      description: 'Sabiendo exactamente cómo funciona nuestra IA y cómo se utiliza tu información.',
      icon: '🔍'
    },
    {
      title: 'Responsabilidad',
      description: 'Nos comprometemos a usar la IA de manera ética y responsable.',
      icon: '🤝'
    },
    {
      title: 'Inclusividad',
      description: 'Nuestro servicio está disponible para todos, sin discriminación.',
      icon: '🌍'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Principios Éticos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="text-4xl mb-4">{principle.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
              <p className="text-gray-600">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthicalSection;
