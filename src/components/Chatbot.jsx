import React, { useState, useRef, useEffect } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { 
      text: '¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte hoy?', 
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Efecto para hacer scroll automáticamente al final de los mensajes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Agregar mensaje del usuario
      const userMessage = { 
        text: input, 
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setIsTyping(true);

      // Simulación de respuesta de la IA
      setTimeout(() => {
        const botResponses = [
          "¡Entendido! ¿Hay algo más en lo que pueda ayudarte?",
          "https://landbot.online/v3/H-2959307-MZ7U2C3BJCIRX1UO/index.html",
          "Interesante, ¿te gustaría profundizar más en este tema?",
          "¡Claro! Estoy aquí para ayudarte con lo que necesites.",
          "Gracias por compartir. ¿En qué más puedo asistirte?",
          "¡Perfecto! ¿Hay algo específico sobre lo que te gustaría saber más?"
        ];
        
        const botMessage = { 
          text: botResponses[Math.floor(Math.random() * botResponses.length)],
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="position-fixed bottom-0 end-0 mb-4 me-4" style={{ zIndex: 1060 }}>
      <div className="card shadow-lg" style={{ width: '380px', height: '600px', border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
        {/* Encabezado del chat */}
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center" style={{ borderBottom: 'none' }}>
          <div className="d-flex align-items-center">
            <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '36px', height: '36px' }}>
              <i className="bi bi-robot text-primary"></i>
            </div>
            <h5 className="mb-0">Asistente de IA</h5>
          </div>
          <div>
            <button className="btn btn-sm btn-outline-light me-1">
              <i className="bi bi-dash-lg"></i>
            </button>
            <button className="btn btn-sm btn-outline-light">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>

        {/* Área de mensajes */}
        <div className="card-body p-0 d-flex flex-column" style={{ overflowY: 'auto', backgroundColor: '#f8f9fa' }}>
          <div className="p-3 flex-grow-1">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`d-flex mb-3 ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                <div 
                  className={`rounded-4 p-3 position-relative ${message.sender === 'user' 
                    ? 'bg-primary text-white' 
                    : 'bg-white border'}`}
                  style={{ maxWidth: '80%' }}
                >
                  <div className="message-text">{message.text}</div>
                  <div 
                    className="text-muted small mt-1" 
                    style={{ 
                      fontSize: '0.7rem',
                      textAlign: message.sender === 'user' ? 'right' : 'left'
                    }}
                  >
                    {formatTime(message.timestamp)}
                  </div>
                  {message.sender === 'bot' && (
                    <div className="position-absolute top-0 start-0 translate-middle">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                        <i className="bi bi-robot" style={{ fontSize: '0.7rem' }}></i>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="d-flex mb-3">
                <div className="bg-white rounded-4 p-3">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Área de entrada */}
        <div className="card-footer border-0 bg-white pt-3">
          <Form onSubmit={handleSubmit} className="mb-0">
            <InputGroup>
              <Form.Control
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="border-0 rounded-start-4 py-3"
                style={{ boxShadow: 'none' }}
              />
              <Button 
                variant="primary" 
                type="submit" 
                className="rounded-end-4 px-4"
                disabled={!input.trim()}
              >
                <i className="bi bi-send-fill"></i>
              </Button>
            </InputGroup>
            <div className="text-muted small mt-2 text-center">
              <small>Presiona Enter para enviar</small>
            </div>
          </Form>
        </div>
      </div>
      <style jsx global>{`
        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 10px 15px;
        }
        .typing-indicator span {
          width: 8px;
          height: 8px;
          background-color: #6c757d;
          border-radius: 50%;
          display: inline-block;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .typing-indicator span:nth-child(1) {
          animation-delay: -0.32s;
        }
        .typing-indicator span:nth-child(2) {
          animation-delay: -0.16s;
        }
        @keyframes bounce {
          0%, 80%, 100% { 
            transform: scale(0);
          } 40% { 
            transform: scale(1.0);
          }
        }
        .message-text {
          white-space: pre-wrap;
          word-break: break-word;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
