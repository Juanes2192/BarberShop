import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que esto esté correctamente importado
import PrincipalPage from './pages/PrincipalPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrincipalPage/>
  </React.StrictMode>
);
