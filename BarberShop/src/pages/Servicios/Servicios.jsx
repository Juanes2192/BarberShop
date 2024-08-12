import React from 'react';
import opcionservicio1 from '../../img/Servicios/opcionservicio1.png';
import opcionservicio2 from '../../img/Servicios/opcionservicio2.png';
import opcionservicio3 from '../../img/Servicios/opcionservicio3.png';
import './Servicios.css';

export default function Servicios() {
  return (
    <div className='op-servicios'>
      <div className='op-servicios-barberia'>
        <img src={opcionservicio1} alt="servicio barbería" />
        <h1 className='titulo-servicio'><strong>BARBERIA</strong></h1>
        <p className='resumen-servicio'>Si conoce su estilo, agende su cita.</p>
        <button className='boton-servicio'>AGENDA TU CITA</button>
      </div>
      <div className='op-servicios-asesoramiento'>
        <img src={opcionservicio2} alt="servicio asesoramiento" />
        <h1 className='titulo-servicio'><strong>ASESORIA DE IMAGEN</strong></h1>
        <p className='resumen-servicio'>Si aun no encuentras tu estilo, nuestros profesionales te pueden guiar.</p>
        <button className='boton-servicio'>AGENDA TU CITA</button>
      </div>
      <div className='op-servicios-dermatologia'>
        <img src={opcionservicio3} alt="servicio dermatología" />
        <h1 className='titulo-servicio'><strong>DERMATOLOGIA</strong></h1>
        <p className='resumen-servicio'>Si conoce su estilo, agende su cita.</p>
        <button className='boton-servicio'>AGENDA TU CITA</button>
      </div>
    </div>
  );
}
