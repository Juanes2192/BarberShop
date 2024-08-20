import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Alert } from 'react-bootstrap';
import './Barberia.css';
import opbarberia1 from '../../../../img/Servicios/opbarberia1.png';
import opbarberia2 from '../../../../img/Servicios/opbarberia2.png';
import opbarberia3 from '../../../../img/Servicios/opbarberia3.png';

export function Barberia() {
  const [validated, setValidated] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [total, setTotal] = useState(0);
  const [selectedBarber, setSelectedBarber] = useState('1');
  const [selectedReminder, setSelectedReminder] = useState('1');
  const [showError, setShowError] = useState(false);

  const services = [
    { id: 1, name: 'Estilo de barba', price: 7500, img: opbarberia1 },
    { id: 2, name: 'Corte de cabello', price: 15000, img: opbarberia2 },
    { id: 3, name: 'Cabello + Barba', price: 20000, img: opbarberia3 },
  ];

  const handleServiceSelect = (id, price) => {
    setSelectedService(id);
    setTotal(price);
  };

  const handleBarberChange = (event) => {
    setSelectedBarber(event.target.value);
  };

  const handleReminderChange = (event) => {
    setSelectedReminder(event.target.value);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (
      form.checkValidity() === false ||
      total === 0 ||
      selectedBarber === '1' ||
      selectedReminder === '1'
    ) {
      event.preventDefault();
      event.stopPropagation();
      setShowError(true);
    } else {
      setShowError(false);
    }

    setValidated(true);
  };

  return (
    <div className="barberia-container">
      <header className="header-barberia">
        <h1>Formulario Barbería</h1>
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
              Por favor digita tu nombre completo.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomUsername" className="barberia-form-group">
            <Form.Label className="barberia-label">Correo Electrónico</Form.Label>
            <InputGroup hasValidation className="barberia-input-group">
              <InputGroup.Text id="inputGroupPrepend" className="barberia-input-text">@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                aria-describedby="inputGroupPrepend"
                required
                className="barberia-input"
              />
              <Form.Control.Feedback type="invalid" className="barberia-feedback">
                Por favor, digita un correo electrónico válido.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom04" className="barberia-form-group">
            <Form.Label className="barberia-label">Teléfono</Form.Label>
            <Form.Control
              type="number"
              placeholder="Número de teléfono"
              required
              className="barberia-input"
            />
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

        <div className="barberia-titulo-servicios"><h2>OPCIONES DE SERVICIO</h2></div>

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

        <div className="barberia-form-group">
          <label className="barberia-label" htmlFor="barbero">Selecciona un barbero</label>
          <select
            id="barbero"
            value={selectedBarber}
            onChange={handleBarberChange}
            className={`barberia-select ${selectedBarber === '1' ? 'is-invalid' : ''}`}
            required
          >
            <option value="1">Selecciona un barbero</option>
            <option value="2">Esteban Perdomo</option>
            <option value="3">Felipe Rodriguez</option>
            <option value="4">Carlos Perdomo</option>
            <option value="5">Jean Riascos</option>
            {/* ... otras opciones */}
          </select>
        </div>

        <div className="barberia-form-group">
          <label className="barberia-label" htmlFor="recordatorio">Método de recordatorio</label>
          <select
            id="recordatorio"
            value={selectedReminder}
            onChange={handleReminderChange}
            className={`barberia-select ${selectedReminder === '1' ? 'is-invalid' : ''}`}
            required
          >
            <option value="1">Método de recordatorio</option>
            <option value="2">Email</option>
            <option value="3">Whatsapp</option>
            <option value="4">SMS</option>
          </select>
        </div>

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

        {showError && (
          <Alert variant="danger" className="alert-lg">
            Debes seleccionar al menos un servicio y completar todos los campos obligatorios.
          </Alert>
        )}

        <Button
          type="submit"
          className="barberia-submit-button"
          disabled={total === 0 || selectedBarber === '1' || selectedReminder === '1'}
        >
          Solicitar cita
        </Button>
      </Form>
    </div>
  );
}
