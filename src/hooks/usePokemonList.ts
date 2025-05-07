import { useEffect, useState } from 'react';

export interface PokemonSummary {
  name: string;
  url: string;
}

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

const usePokemonList = () => {
  const [resources, setResources] = useState<PokemonSummary[]>([]);

  useEffect(() => {
    const fetchList = async () => {
      const res = await fetch(`${POKEAPI_BASE_URL}/pokemon?limit=50`);
      const data = await res.json();
      setResources(data.results); 
    };

    fetchList();
  }, []);

  return { resources };
};

export default usePokemonList;
