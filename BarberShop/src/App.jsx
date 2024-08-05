import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrincipalPage from './pages/PrincipalPage';
import Servicios from './pages/Servicios/Servicios';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import Productos from './pages/Productos/Productos';
import {Footer} from './components/Footer/Footer';

const currentYear = new Date().getFullYear();

export function App() {
  return (
    <BrowserRouter>
      <header className='Header'><NavBar /></header>
      <div>
        <Routes>
          <Route path='/' element={<PrincipalPage />} />
          <Route path='/Servicios' element={<Servicios />} />
          <Route path='/Productos' element={<Productos />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}
