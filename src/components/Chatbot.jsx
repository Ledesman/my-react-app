import React from 'react';

const Chatbot = () => {

  return (
    <div className="position-fixed bottom-6 end-6" style={{ zIndex: 1050 }}>
      {/* Floating Action Button */}
      <a 
        href="https://landbot.online/v3/H-3004404-M3P466ZMXE6B5RZU/index.html"
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center justify-content-center rounded-circle shadow-lg"
        style={{
          width: '60px',
          height: '60px',
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          background: 'DodgerBlue',
          border: 'none',
          textDecoration: 'none',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          zIndex: 1051
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        }}
      >
        <i className="bi bi-chat-dots fs-4 text-white"></i>
      </a>

      {/* Notification Badge */}
      <div 
        className="position-fixed d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundColor: '#FF3B30',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          bottom: '70px',
          right: '25px',
          zIndex: 1052,
          fontSize: '12px',
          fontWeight: 'bold',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      >
        1
      </div>
    </div>
  );
};

export default Chatbot;
