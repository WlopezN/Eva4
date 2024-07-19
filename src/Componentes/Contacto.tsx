import React from 'react';

const Contacto: React.FC = () => {
  return (
    <div className="container-fluid">
      <table>
        <thead>
          <tr>
            <th>Asistencia</th>
            <th>Horario</th>
            <th>Contacto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Software</td>
            <td>Lunes a Viernes 9:00 AM - 5:00 PM</td>
            <td>MicrosoftGames.@Microsoft.com</td>
          </tr>
          <tr>
            <td>Registro</td>
            <td>Lunes a Viernes 9:00 AM - 5:00 PM</td>
            <td>Waldo.lo@hotmail.com</td>
          </tr>
          <tr>
            <td>Hardware</td>
            <td>Lunes a Viernes 9:00 AM - 5:00 PM</td>
            <td>MicrosoftGames.@Microsoft.com</td>
          </tr>
          <tr>
            <td>Instalación</td>
            <td>Lunes a Viernes 9:00 AM - 5:00 PM</td>
            <td>MicrosoftGames.@Microsoft.com</td>
          </tr>
          <tr>
            <td>Teléfono</td>
            <td>Lunes a Domingo 9:00 AM - 5:00 PM</td>
            <td>5634358203 - 56933802749</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contacto;