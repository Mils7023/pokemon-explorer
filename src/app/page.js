'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PokemonCard, Spinner } from '@/components';
import { fetchPokemonList } from '@/api/fetchPokemon';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getPokemons = async () => {
      setLoading(true);
      setError(null);  
      try {
        const data = await fetchPokemonList(); 
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
        setError('Failed to fetch Pokemon data.');
      } finally {
        setLoading(false);
      }
    };

    getPokemons();
  }, []);

  const handleStatsClick = () => {
    setIsButtonLoading(true);
    router.push("/pokemon/stats");
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="text-center py-5 text-danger">{error}</div>;
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Pokemon List</h1>

      <div className="text-center mb-4">
        <button 
          className="btn btn-primary" 
          onClick={handleStatsClick} 
          disabled={isButtonLoading}
        >
          {isButtonLoading ? "Loading..." : "View Pokemon Stats"}
        </button>
      </div>

      <div className="row">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} id={index + 1} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
}
