import React, { useState } from 'react';

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar la carga

  const fetchPokemonList = async () => {
    setIsLoading(true); // Inicia la carga
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPokemonList(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false); // Finaliza la carga
    }
  };

  return (
    <div>
      <h2>Lista de Pokémon</h2>
      <button onClick={fetchPokemonList} disabled={isLoading}>
        {isLoading ? 'Cargando...' : 'Cargar Pokémon'}
      </button>
      <ul>
        {pokemonList.map((pokemon: any, index: number) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;