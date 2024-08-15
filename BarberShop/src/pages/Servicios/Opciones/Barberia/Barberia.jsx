import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './Barberia.css';
import opbarberia1 from '../../../../img/Servicios/opbarberia1.png'
import opbarberia2 from '../../../../img/Servicios/opbarberia2.png'
import opbarberia3 from '../../../../img/Servicios/opbarberia3.png'

export function Barberia() {
  const [validated, setValidated] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [total, setTotal] = useState(0);

  const services = [
    { id: 1, name: 'Corte de cabello', price: 30, img: opbarberia1 },
    { id: 2, name: 'Barba', price: 20, img: opbarberia2 },
    { id: 3, name: 'Cabello + Barba', price: 45, img: opbarberia3 },
  ];

  const handleServiceSelect = (id, price) => {
    setSelectedService(id);
    setTotal(price);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="barberia-container">
      <header className="header-barberia">
        <h1>Formulario Barberia</h1>
      </header>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="barberia-form">
        <Row className="mb-3 barberia-row">
          <Form.Group as={Col} md="4" controlId="validationCustom01" className="barberia-form-group">
            <Form.Label className="barberia-label">Nombre Completo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre completo"
              className="barberia-input"
            />
            <Form.Control.Feedback type="invalid" className="barberia-feedback">
              Por favor digite el nombre de usuario.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomUsername" className="barberia-form-group">
            <Form.Label className="barberia-label">Correo Electronico</Form.Label>
            <InputGroup hasValidation className="barberia-input-group">
              <InputGroup.Text id="inputGroupPrepend" className="barberia-input-text">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Correo electronico"
                aria-describedby="inputGroupPrepend"
                required
                className="barberia-input"
              />
              <Form.Control.Feedback type="invalid" className="barberia-feedback">
                Por favor digite un correo electronico.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom04" className="barberia-form-group">
            <Form.Label className="barberia-label">Telefono</Form.Label>
            <Form.Control type="text" placeholder="Digite su numero de telefono" required className="barberia-input" />
            <Form.Control.Feedback type="invalid" className="barberia-feedback">
              Proporciona un número de teléfono válido.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3 barberia-row">
          <Form.Group as={Col} md="6" controlId="formDate" className="barberia-form-group">
            <Form.Label className="barberia-label">Fecha de la Cita</Form.Label>
            <Form.Control type="date" name="date" required className="barberia-input" />
            <Form.Control.Feedback type="invalid" className="barberia-feedback">
              Selecciona una fecha válida.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="formTime" className="barberia-form-group">
            <Form.Label className="barberia-label">Hora de la Cita</Form.Label>
            <Form.Control type="time" name="time" required className="barberia-input" />
            <Form.Control.Feedback type="invalid" className="barberia-feedback">
              Selecciona una hora válida.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3 barberia-card-row">
          {services.map(service => (
            <Card 
              key={service.id} 
              className={`barberia-card ${selectedService === service.id ? 'selected' : ''}`}
              onClick={() => handleServiceSelect(service.id, service.price)}
            >
              <Card.Img variant="top" src={service.img} className="barberia-card-img" />
              <Card.Body className="barberia-card-body">
                <Card.Title className="barberia-card-title">{service.name}</Card.Title>
                <Card.Text className="barberia-card-text">
                  ${service.price}
                </Card.Text>
                <Button 
                  variant="primary" 
                  className={`barberia-card-button ${selectedService === service.id ? 'selected' : ''}`}
                >
                  {selectedService === service.id ? 'Seleccionado' : 'Seleccionar'}
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>

        <Form.Group as={Row} controlId="formBarbero" className="barberia-form-group">
          <Form.Label as={Col} sm="2" className="barberia-label">Selecciona un barbero</Form.Label>
          <Col sm="10">
            <Form.Select aria-label="Selecciona un barbero" className="barberia-select">
              <option>Selecciona un barbero</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formMetodoRecordatorio" className="barberia-form-group">
          <Form.Label as={Col} sm="2" className="barberia-label">Método de recordatorio</Form.Label>
          <Col sm="10">
            <Form.Select aria-label="Método de recordatorio" className="barberia-select">
              <option>Método de recordatorio</option>
              <option value="1">Email</option>
              <option value="2">SMS</option>
              <option value="3">Llamada</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox" className="barberia-form-group">
          <Form.Check 
            type="checkbox" 
            label="Aceptar términos y condiciones" 
            required
            className="barberia-checkbox"
          />
        </Form.Group>

        <Form.Group controlId="formReceivePromotions" className="barberia-form-group">
          <Form.Check 
            type="checkbox" 
            label="¿Deseas recibir promociones y ofertas especiales?" 
            className="barberia-checkbox"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="barberia-label">Total</Form.Label>
          <Form.Control
            type="text"
            value={`$${total}`}
            readOnly
            className="barberia-input"
          />
        </Form.Group>

        <Button type="submit" className="barberia-submit-button">Enviar Formulario</Button>
      </Form>
    </div>
  );
}
