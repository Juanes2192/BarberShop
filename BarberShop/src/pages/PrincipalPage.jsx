import React, { useState } from 'react';
import './PrincipalPage.css';
import { Reviews } from '../components/Reviews/Reviews';
import serviciogrid1 from '../img/serviciosgrid1.jpg';
import serviciogrid2 from '../img/serviciosgrid2.jpg';
import serviciogrid3 from '../img/serviciosgrid3.jpg';
import serviciogrid4 from '../img/serviciosgrid4.jpg';

const currentYear = new Date().getFullYear();

export default function PrincipalPage() {
  return (
    <React.Fragment>
      <header className='Header'>
        {/* <NavBar /> */}
      </header>
      <div className='contenedor-principal'>
        <section id="/" className='seccion-inicio'>
          <div className="presentacion">
            <h1>¡MÁS QUE UN CORTE, UNA EXPERIENCIA!</h1>
            <button>AGENDA TU CITA</button>
            <button>NUESTROS PRODUCTOS</button>
          </div>
        </section>
        <section id="reseñas" className='secciones'>
          <div className="reseñas">
            <Reviews />
          </div>
        </section>
        <section id="servicios" className='secciones'>
          <div className='servicios'>
            <div className='servicios-imagenes'>
              <div className='imagen-contenedor'>
                <img src={serviciogrid1} alt="servicios1" />
                <div className='imagen-degradado'></div>
              </div>
              <div className='imagen-contenedor'>
                <img src={serviciogrid2} alt="servicios2" />
                <div className='imagen-degradado'></div>
              </div>
              <div className='imagen-contenedor'>
                <img src={serviciogrid3} alt="servicios3" />
                <div className='imagen-degradado'></div>
              </div>
              <div className='imagen-contenedor'>
                <img src={serviciogrid4} alt="servicios4" />
                <div className='imagen-degradado'></div>
              </div>
              <div className='servicios-texto'> 
                <h2><strong>CONOCE NUESTROS SERVICIOS</strong></h2>
                <p>Descubre la variedad de servicios que ofrecemos en nuestra barbería. 
                  Desde cortes clásicos y afeitados tradicionales hasta tratamientos modernos y 
                  personalizados, cada servicio está diseñado para satisfacer tus necesidades. 
                  Haz clic para explorar nuestras opciones y encuentra el estilo que mejor se adapte a ti.</p>
                  <button>CONOCELOS AQUÍ</button>
              </div>
            </div>

          </div>
        </section>
        <section id="productos" className='secciones'>
          <h2><strong>Aqui van los productos</strong></h2>
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
