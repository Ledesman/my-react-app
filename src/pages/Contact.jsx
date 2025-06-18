import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    setTimeout(() => {
      console.log('Formulario enviado:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', subject: '' });
      setValidated(false);
      
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: 'bi-geo-alt-fill',
      title: 'Dirección',
      content: 'Av. Principal 1234, Piso 5, Buenos Aires',
      link: 'https://maps.google.com'
    },
    {
      icon: 'bi-telephone-fill',
      title: 'Teléfono',
      content: '+54 11 1234-5678',
      link: 'tel:+541112345678'
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email',
      content: 'contacto@ia-generativa.com',
      link: 'mailto:contacto@ia-generativa.com'
    },
    {
      icon: 'bi-clock-fill',
      title: 'Horario de Atención',
      content: 'Lun - Vie: 9:00 - 18:00',
      link: ''
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container className="py-4 py-lg-5">
        {/* Encabezado */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-primary mb-3">Contáctanos</h1>
          <p className="lead text-muted mb-0">¿Tienes alguna pregunta? Estamos aquí para ayudarte.</p>
          <p className="lead text-muted mb-0">Estamos comprometidos a responder a todas las consultas en un plazo de 24 horas.</p> <hr />
          <p className="lead text-muted mb-0">Grupo 19/ IA Generativa  - <h3> Barrionuevo Jose Luis, Godoy Jorge Antonio, Ledesma Nicolas Fabian.  </h3> </p>
          <div className="mx-auto" style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #0d6efd, #0dcaf0)', marginTop: '1.5rem' }}></div>
        </div>

        <Row className="g-4">
          {/* Información de Contacto */}
          <Col lg={5} className="mb-4 mb-lg-0">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4 p-lg-5">
                <h2 className="h4 fw-bold mb-4">Información de Contacto</h2>
                <p className="text-muted mb-4">
                  Completa el formulario o contáctanos directamente a través de los siguientes medios. 
                  Estamos comprometidos a responder a todas las consultas en un plazo de 24 horas.
                </p>
                
                <div className="vstack gap-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="d-flex">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 me-4">
                        <i className={`bi ${item.icon} fs-4`}></i>
                      </div>
                      <div>
                        <h3 className="h6 fw-bold mb-1">{item.title}</h3>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-decoration-none"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="mb-0">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-5">
                  <h3 className="h6 fw-bold mb-3">Síguenos en redes sociales</h3>
                  <div className="d-flex gap-3">
                    {['bi-facebook', 'bi-twitter', 'bi-linkedin', 'bi-instagram'].map((icon, i) => (
                      <a 
                        key={i} 
                        href="#" 
                        className="text-decoration-none text-primary bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '40px', height: '40px' }}
                      >
                        <i className={`bi ${icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Formulario de Contacto */}
          <Col lg={7}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4 p-lg-5">
                <h2 className="h4 fw-bold mb-4">Envíanos un mensaje</h2>
                
                {submitStatus === 'success' && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                    <button type="button" className="btn-close" onClick={() => setSubmitStatus(null)}></button>
                  </div>
                )}

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="formName" className="mb-3">
                        <Form.Label>Nombre completo <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Ingresa tu nombre"
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor ingresa tu nombre.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Correo electrónico <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="ejemplo@dominio.com"
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor ingresa un correo electrónico válido.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    
                    <Col xs={12}>
                      <Form.Group controlId="formSubject" className="mb-3">
                        <Form.Label>Asunto <span className="text-danger">*</span></Form.Label>
                        <Form.Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Selecciona un asunto...</option>
                          <option value="consulta">Consulta General</option>
                          <option value="soporte">Soporte Técnico</option>
                          <option value="ventas">Ventas</option>
                          <option value="socios">Trabaja con Nosotros</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    
                    <Col xs={12}>
                      <Form.Group controlId="formMessage" className="mb-4">
                        <Form.Label>Mensaje <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          required
                          placeholder="Escribe tu mensaje aquí..."
                          style={{ resize: 'none' }}
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor escribe tu mensaje.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    
                    <Col xs={12}>
                      <div className="d-grid">
                        <Button 
                          variant="primary" 
                          type="submit" 
                          size="lg"
                          disabled={isSubmitting}
                          className="fw-semibold py-2"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Enviando...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-send-fill me-2"></i>
                              Enviar Mensaje
                            </>
                          )}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      {/* Mapa */}
      <div className="mt-5" style={{ height: '400px', width: '100%' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276468!2d-58.38375992440831!3d-34.60373888166422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf425d7b9b%3A0x3e9a2d7bb9e3b6d4!2sObelisco!5e0!3m2!1ses-419!2sar!4v1620000000000!5m2!1ses-419!2sar" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Ubicación en el mapa"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
