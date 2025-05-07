export interface Pokemon {
    moves: any;
    stats: any;
    abilities: any;
    sprites: any;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    species: {
      name: string;
      url: string;
    };
  }
  
  export interface Species {
    name: string;
    color: {
      name: string;
    };
  }

  
  export interface PokemonListItem {
    name: string;
    url: string;
  }
  
  export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
  }
  