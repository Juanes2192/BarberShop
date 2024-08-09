import React, { useState, useEffect } from 'react';
import './PrincipalPage.css';
import { Reviews } from '../components/Reviews/Reviews';
import serviciogrid1 from '../img/Servicios/serviciosgrid1.png';
import serviciogrid2 from '../img/Servicios/serviciosgrid2.png';
import serviciogrid3 from '../img/Servicios/serviciosgrid3.png';
import serviciogrid4 from '../img/Servicios/serviciosgrid4.png';
import productosgrid1 from '../img/Productos/productosgrid1.png';
import productosgrid2 from '../img/Productos/productosgrid2.png';
import productosgrid3 from '../img/Productos/productosgrid3.png';
import productosgrid4 from '../img/Productos/productosgrid4.png';
import { useNavigate } from 'react-router-dom';


export default function PrincipalPage() {
  const [selectedOption, setSelectedOption] = useState('home');
  const navigate = useNavigate();

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    if (targetId === 'servicios') {
      navigate('/servicios'); // Redirige a la ruta /
    } else if (targetId === 'productos') {
      navigate('/Productos'); // Redirige a la ruta /Servicios
    }
  }

  useEffect(() => {
    // Función para desplazarse a la sección de servicios
    const scrollToServices = () => {
      const servicesSection = document.getElementById('servicios');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Función para desplazarse a la sección de productos
    const scrollToProducts = () => {
      const productsSection = document.getElementById('productos');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Agrega el event listener al botón de "AGENDA TU CITA"
    const agendaButton = document.getElementById('boton-agenda');
    if (agendaButton) {
      agendaButton.addEventListener('click', scrollToServices);
    }

    // Agrega el event listener al botón de "NUESTROS PRODUCTOS"
    const productsButton = document.getElementById('boton-productos');
    if (productsButton) {
      productsButton.addEventListener('click', scrollToProducts);
    }

    // Limpia los event listeners al desmontar el componente
    return () => {
      if (agendaButton) {
        agendaButton.removeEventListener('click', scrollToServices);
      }
      if (productsButton) {
        productsButton.removeEventListener('click', scrollToProducts);
      }
    };
  }, []);

  return (
    <React.Fragment>
      <div className='contenedor-principal'>
        <section id="/" className='seccion-inicio'>
          <div className="presentacion">
            <h1>¡MÁS QUE UN CORTE, UNA EXPERIENCIA!</h1>
            <button id="boton-agenda">AGENDA TU CITA</button>
            <button id="boton-productos">NUESTROS PRODUCTOS</button>
          </div>
        </section>
        <section id="reseñas" className='secciones'>
          <div className="reseñas">
            <Reviews />
          </div>
        </section>
        <section id='consejos-servicios' className='secciones'>
          <div className='consejos-servicios'>
            hola
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
                <button onClick={(e) => handleNavLinkClick(e, 'servicios')}
                  href="#servicios"
                  className={selectedOption === 'servicios' ? 'selected' : ''}>CONOCELOS AQUÍ</button>
              </div>
            </div>
          </div>
        </section>
        <section id='consejos-productos' className='secciones'>
          <div className='consejos-productos'>
            hola
          </div>
        </section>
        <section id="productos" className='secciones'>
          <div className='servicios'>
            <div className='servicios-imagenes'>
              <div className='imagen-contenedor'>
                <img src={productosgrid1} alt="servicios1" />
                <div className='imagen-degradado'></div>
              </div>
              <div className='imagen-contenedor'>
                <img src={productosgrid2} alt="servicios2" />
                <div className='imagen-degradado'></div>
              </div>
              <div className='imagen-contenedor'>
                <img src={productosgrid3} alt="servicios3" />
                <div className='imagen-degradado'></div>
              </div>
              <div className='imagen-contenedor'>
                <img src={productosgrid4} alt="servicios4" />
                <div className='imagen-degradado'></div>
              </div>
              <div className='servicios-texto'>
                <h2><strong>CONOCE NUESTROS PRODUCTOS</strong></h2>
                <p>Descubre la variedad de productos que ofrecemos en nuestra barbería.</p>
                <button onClick={(e) => handleNavLinkClick(e, 'productos')}
                  href="#productos"
                  className={selectedOption === 'productos' ? 'selected' : ''}>CONOCELOS AQUÍ</button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
