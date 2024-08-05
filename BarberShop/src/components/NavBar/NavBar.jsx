import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import "./NavBar.css";

export default function NavBar() {
  const [selectedOption, setSelectedOption] = useState('home');
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let selectedSectionId = 'home'; // Default to home

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          selectedSectionId = section.id;
        }
      });

      setSelectedOption(selectedSectionId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    if (targetId === 'home') {
      navigate('/'); // Redirige a la ruta /
    } else if (targetId === 'servicios') {
      navigate('/Servicios'); // Redirige a la ruta /Servicios
    }else if (targetId === 'productos') {
      navigate('/Productos'); // Redirige a la ruta /Servicios
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth"
        });
      }
      setSelectedOption(targetId);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
      <Container>
        <Navbar.Brand >MR. BARBER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              onClick={(e) => handleNavLinkClick(e, 'home')} 
              href="/" 
              className={selectedOption === 'home' ? 'selected' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              onClick={(e) => handleNavLinkClick(e, 'servicios')} 
              href="#servicios" 
              className={selectedOption === 'servicios' ? 'selected' : ''}
            >
              Servicios
            </Nav.Link>
            <Nav.Link 
              onClick={(e) => handleNavLinkClick(e, 'productos')} 
              href="#productos" 
              className={selectedOption === 'productos' ? 'selected' : ''}
            >
              Productos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
