// Menu.tsx

import React from 'react';

const Menu: React.FC = () => {
  return (
    <div>
        <div className="menuItem"><a href="#home">Home</a></div>
        <div className="menuItem"><a href="#registrate">Registrate</a></div>
        <div className="menuItem"><a href="#quienes-somos">Quienes Somos</a></div>
        <div className="menuItem"><a href="#contacto">Contacto</a></div>
        <div className="menuItem"><a href="#api">API</a></div>
    </div>
  );
}


export default Menu;