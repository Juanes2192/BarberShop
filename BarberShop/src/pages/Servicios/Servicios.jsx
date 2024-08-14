import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import opcionservicio1 from '../../img/Servicios/opcionservicio1.png';
import opcionservicio2 from '../../img/Servicios/opcionservicio2.png';
import opcionservicio3 from '../../img/Servicios/opcionservicio3.png';
import './Servicios.css';

export default function Servicios() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    setSelectedOption(targetId);

    if (targetId === 'asesoriadeimagen') {
      navigate('/servicios/Asesoria-de-imagen');
    } else if (targetId === 'barberia') {
      navigate('/Servicios/Barberia');
    } else if (targetId === 'dermatologia') {
      navigate('/Servicios/Dermatologia');
    } 
  };

  return (
    <div className='op-servicios'>
      <div className='op-servicios-barberia'>
        <img src={opcionservicio1} alt="servicio barbería" />
        <h1 className='titulo-servicio'><strong>BARBERIA</strong></h1>
        <p className='resumen-servicio'>Si conoces tu estilo, agenda una cita.</p>
        <button
          onClick={(e) => handleNavLinkClick(e, 'barberia')}
          className={`boton-servicio ${selectedOption === 'barberia' ? 'selected' : ''}`}
        >
          AGENDA TU CITA
        </button>
      </div>
      <div className='op-servicios-asesoramiento'>
        <img src={opcionservicio2} alt="servicio asesoramiento" />
        <h1 className='titulo-servicio'><strong>ASESORIA DE IMAGEN</strong></h1>
        <p className='resumen-servicio'>Si aún no encuentras tu estilo, nuestros profesionales te pueden guiar.</p>
        <button
          onClick={(e) => handleNavLinkClick(e, 'asesoriadeimagen')}
          className={`boton-servicio ${selectedOption === 'asesoriadeimagen' ? 'selected' : ''}`}
        >
          AGENDA TU CITA
        </button>
      </div>
      <div className='op-servicios-dermatologia'>
        <img src={opcionservicio3} alt="servicio dermatología" />
        <h1 className='titulo-servicio'><strong>DERMATOLOGÍA</strong></h1>
        <p className='resumen-servicio'>La salud de tu piel en manos de profesionales.</p>
        <button
          onClick={(e) => handleNavLinkClick(e, 'dermatologia')}
          className={`boton-servicio ${selectedOption === 'dermatologia' ? 'selected' : ''}`}
        >
          AGENDA TU CITA
        </button>
      </div>
    </div>
  );
}
