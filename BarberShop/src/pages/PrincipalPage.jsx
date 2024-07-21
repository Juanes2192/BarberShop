import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './PrincipalPage.css';
import  {Reviews}  from '../components/Reviews/Reviews';

const currentYear = new Date().getFullYear();

export default function PrincipalPage() {
  return (
    <React.Fragment>
      <header className='Header'>
        <NavBar />
      </header>
      <div className='contenedor-principal'>
        <section id="home" className='seccion-inicio'>
          <div className="presentacion">
            <h1>¡MÁS QUE UN CORTE, UNA EXPERIENCIA!</h1>
            <button>AGENDA TU CITA</button>
            <button>NUESTROS PRODUCTOS</button>
          </div>
        </section>
        <section id="reseñas" className='secciones'>
          <div className="reseñas">
            {/* <h1>aqui van las reseñas</h1> */}
            <Reviews/>
          </div>
        </section>
        <section id="servicios" className='secciones'>
          <h2><strong>Aqui van los Servicios</strong></h2>
        </section>
        <section id="productos" className='secciones'>
          <h2><strong>Aqui van los productos</strong></h2>
        </section>
        <section id="merch" className='secciones'>
          <h2><strong>merch</strong></h2>
        </section>
        <section id="derechos" className="secciones">
          <div className=''>
            <p>&copy; {currentYear} Esteban Perdomo. Casi todos los derechos reservados.</p>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
