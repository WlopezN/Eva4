import React, { useState, useEffect } from 'react';

interface Jugador {
  id: number;
  nombre: string;
  email: string;
  rut: string;
  sexo: string;
  opciones: string[];
}

const FormularioJugadores: React.FC = () => {
  const initialJugador: Jugador = {
    id: 0,
    nombre: '',
    email: '',
    rut: '',
    sexo: '',
    opciones: []
  };

  const [listaJugadores, setListaJugadores] = useState<Jugador[]>([]);
  const [objJugador, setObjJugador] = useState<Jugador>(initialJugador);
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    const jugadoresGuardados = localStorage.getItem('jugadores');
    if (jugadoresGuardados) {
      setListaJugadores(JSON.parse(jugadoresGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jugadores', JSON.stringify(listaJugadores));
  }, [listaJugadores]);

  const validarFormulario = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      objJugador.nombre === '' ||
      objJugador.email === '' ||
      objJugador.rut === '' ||
      objJugador.sexo === '' ||
      objJugador.opciones.length === 0
    ) {
      alert('Por favor, completa todos los campos');
      return;
    }

    if (editando) {
      editarJugador();
      setEditando(false);
    } else {
      agregarJugador();
    }

    limpiarObjeto();
  };

  const agregarJugador = () => {
    const nuevoJugador = {
      ...objJugador,
      id: Date.now()
    };
    setListaJugadores([...listaJugadores, nuevoJugador]);
  };

  const editarJugador = () => {
    setListaJugadores(
      listaJugadores.map(jugador =>
        jugador.id === objJugador.id ? objJugador : jugador
      )
    );
  };

  const cargarJugador = (jugador: Jugador) => {
    setObjJugador(jugador);
    setEditando(true);
  };

  const eliminarJugador = (id: number) => {
    setListaJugadores(listaJugadores.filter(jugador => jugador.id !== id));
    limpiarObjeto(); // Limpiar el objeto una vez eliminado
    setEditando(false); // Salir del modo de edición
  };

  const limpiarObjeto = () => {
    setObjJugador(initialJugador);
  };

  return (
    <div>
      <form id="formulario" onSubmit={validarFormulario}>
        <label>
          Nombre:
          <input
            type="text"
            value={objJugador.nombre}
            onChange={e => setObjJugador({ ...objJugador, nombre: e.target.value })}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={objJugador.email}
            onChange={e => setObjJugador({ ...objJugador, email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Rut:
          <input
            type="text"
            value={objJugador.rut}
            onChange={e => setObjJugador({ ...objJugador, rut: e.target.value })}
          />
        </label>
        <br />
        <label>
          Sexo:
          <input
            type="radio"
            name="seccion"
            value="Hombre"
            checked={objJugador.sexo === 'Hombre'}
            onChange={() => setObjJugador({ ...objJugador, sexo: 'Hombre' })}
          />{' '}
          Hombre
          <input
            type="radio"
            name="seccion"
            value="Mujer"
            checked={objJugador.sexo === 'Mujer'}
            onChange={() => setObjJugador({ ...objJugador, sexo: 'Mujer' })}
          />{' '}
          Mujer
        </label>
        <br />
        <label>
          Opciones:
          <input
            type="checkbox"
            name="casual"
            value="Casual"
            checked={objJugador.opciones.includes('Casual')}
            onChange={e =>
              e.target.checked
                ? setObjJugador({
                    ...objJugador,
                    opciones: [...objJugador.opciones, 'Casual']
                  })
                : setObjJugador({
                    ...objJugador,
                    opciones: objJugador.opciones.filter(
                      opcion => opcion !== 'Casual'
                    )
                  })
            }
          />{' '}
          Casual
          <input
            type="checkbox"
            name="competitivo"
            value="Competitivo"
            checked={objJugador.opciones.includes('Competitivo')}
            onChange={e =>
              e.target.checked
                ? setObjJugador({
                    ...objJugador,
                    opciones: [...objJugador.opciones, 'Competitivo']
                  })
                : setObjJugador({
                    ...objJugador,
                    opciones: objJugador.opciones.filter(
                      opcion => opcion !== 'Competitivo'
                    )
                  })
            }
          />{' '}
          Competitivo
        </label>
        <br />
        <button type="submit">{editando ? 'Actualizar' : 'Agregar'}</button>
      </form>
      <div className="div-jugadores">
        <h2>Lista de Jugadores</h2>
        <select
          className="lista-jugadores"
          onChange={e => {
            const jugadorSeleccionado = listaJugadores.find(
              jugador => jugador.id === parseInt(e.target.value)
            );
            if (jugadorSeleccionado) {
              cargarJugador(jugadorSeleccionado);
            }
          }}
        >
          <option disabled value="">
            Selecciona un Jugador
          </option>
          {listaJugadores.map(jugador => (
            <option key={jugador.id} value={jugador.id}>
              {jugador.id} / {jugador.nombre} / {jugador.email} / {jugador.rut} /{' '}
              {jugador.sexo} / {jugador.opciones.join(', ')}
            </option>
          ))}
        </select>
        <button
          className="btn btn-eliminar"
          onClick={() => eliminarJugador(objJugador.id)}
          disabled={!editando}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default FormularioJugadores;