import React from 'react';

const ToolsSection = () => {
  const tools = [
    {
      title: 'Chatbot IA',
      description: 'Comunícate con nuestro asistente inteligente',
      icon: '💬'
    },
    {
      title: 'Generador de Texto',
      description: 'Crea contenido único y de calidad',
      icon: '📝'
    },
    {
      title: 'Traductor Inteligente',
      description: 'Traduce texto entre múltiples idiomas',
      icon: '🌐'
    },
    {
      title: 'Analizador de Texto',
      description: 'Analiza y extrae información relevante',
      icon: '🔍'
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Herramientas Disponibles</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
