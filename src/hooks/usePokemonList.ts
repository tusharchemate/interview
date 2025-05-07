import { useEffect, useState } from 'react';

export interface PokemonSummary {
  name: string;
  url: string;
}

const usePokemonList = () => {
  const [resources, setResources] = useState<PokemonSummary[]>([]);

  useEffect(() => {
    const fetchList = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
      const data = await res.json();
      setResources(data.results); 
    };

    fetchList();
  }, []);

  return { resources };
};

export default usePokemonList;
