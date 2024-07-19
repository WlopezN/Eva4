import React from 'react';
import './App.css';
import Menu from './Componentes/Menu';
import Imagen from './Componentes/Imagen';
import Formulario from './Componentes/Formulario';
import Contacto from './Componentes/Contacto';
import Mensaje from './Componentes/Mensaje';
import PokemonList from './Componentes/PokemonList';
import InicioMensaje from './Componentes/InicioMensaje'; // Importa el componente InicioMensaje

const imageUrl = 'https://i.ibb.co/3vvqqNV/preview.png';

const App: React.FC = () => {
  return (
    <div id="root">
      <Imagen src={imageUrl} alt="Imagen de fondo" />
      <header>
        <Menu />
      </header>
      <div className="content">
        <div id="home" className="seccion">
        <h2>Bienvenido</h2>
          <InicioMensaje /> 
        </div>
        <div id="registrate" className="seccion">
          <h2>Regístrate</h2>
          <Formulario />
        </div>
        <div id="quienes-somos" className="seccion">
          <h2>Quiénes Somos</h2>
          <Mensaje />
        </div>
        <div id="contacto" className="seccion">
          <h2>Información de Contacto</h2>
          <Contacto />
        </div>
        <div id="api" className="seccion">
          <h2>API</h2>
          <PokemonList />
        </div>
      </div>
    </div>
  );
}

export default App;
