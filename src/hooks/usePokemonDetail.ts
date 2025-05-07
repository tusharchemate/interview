import { useState, useEffect } from 'react';
import { Pokemon, Species } from '../types/pokemon';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

const usePokemonDetail = (id: string) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [species, setSpecies] = useState<Species | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonRes = await fetch(`${POKEAPI_BASE_URL}/pokemon/${id}`);
      const pokemonData = await pokemonRes.json();
      setPokemon(pokemonData);
      
      const speciesRes = await fetch(pokemonData.species.url);
      const speciesData = await speciesRes.json();
      setSpecies(speciesData);
    };

    fetchData();
  }, [id]);

  return { pokemon, species };
};

export default usePokemonDetail;
