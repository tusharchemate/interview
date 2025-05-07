<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>
<body>
  <h1>Pokemon React App</h1>

  <p>This is a React-based application that displays a list of Pokemon and their detailed information. The app fetches data from the <a href="https://pokeapi.co/">PokeAPI</a>, including Pokemon data such as their stats, abilities, and moves.</p>

  <h2>Features:</h2>
  <ul>
    <li><strong>Pokemon List:</strong> Displays a paginated list of Pokemon with search functionality.</li>
    <li><strong>Pokemon Detail:</strong> Shows detailed information about each Pokemon, including images, stats, abilities, and moves.</li>
  </ul>

  <h2>Table of Contents:</h2>
  <ul>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#components">Components</a></li>
    <li><a href="#hooks">Hooks</a></li>
    <li><a href="#configuration">Configuration</a></li>
  </ul>

  <h2 id="installation">Installation</h2>
  <ol>
    <li>Clone this repository:
      <pre><code>git clone https://github.com/tusharchemate/interview.git </code></pre>
    </li>
    <li>Navigate to the project folder:
      <pre><code>cd interview</code></pre>
    </li>
    <li>Install the dependencies using Yarn:
      <pre><code>yarn install</code></pre>
    </li>
  </ol>

  <h2 id="usage">Usage</h2>
  <ol>
    <li>Run the app using Yarn:
      <pre><code>yarn dev</code></pre>
    </li>
    <li>Open your browser and navigate to <a href="http://localhost:5175">http://localhost:5175</a> to view the app.</li>
  </ol>

  <h2 id="components">Components</h2>

  <h3>ResourceList</h3>
  <p>The <code>ResourceList</code> component displays a paginated list of Pokémon with a search bar to filter by name. The list allows users to navigate to individual Pokemon details.</p>
  <ul>
    <li><strong>Search:</strong> Filters the list of Pokemon by name.</li>
    <li><strong>Pagination:</strong> Displays 10 Pokemon per page, with "Next" and "Previous" buttons for navigation.</li>
    <li><strong>View Details Button:</strong> Navigates to the detailed view of the selected Pokemon.</li>
  </ul>

  <h4>Example:</h4>
  <pre><code>
<Table highlightOnHover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    {paginated.map((res: PokemonSummary, index) => {
      const id = res.url.split("/").filter(Boolean).pop();
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{res.name}</td>
          <td>
            <Button size="xs" onClick={() => navigate(`/resources/${res.name}`)}>
              View
            </Button>
          </td>
        </tr>
      );
    })}
  </tbody>
</Table>
  </code></pre>

  <h3>ResourceDetail</h3>
  <p>The <code>ResourceDetail</code> component displays detailed information about a selected Pokémon, including:</p>
  <ul>
    <li><strong>Name:</strong> The name of the Pokémon.</li>
    <li><strong>Images:</strong> Front and back sprites of the Pokémon.</li>
    <li><strong>Stats:</strong> Basic stats like height, weight, base experience.</li>
    <li><strong>Abilities:</strong> A list of abilities the Pokémon has.</li>
    <li><strong>Moves:</strong> A list of moves the Pokémon can use.</li>
  </ul>
  <p>It also includes tabs to switch between the abilities, stats, and moves of the Pokémon.</p>

  <h2 id="hooks">Hooks</h2>

  <h3>usePokemonList</h3>
  <p>The <code>usePokemonList</code> hook fetches a list of Pokemon from the PokeAPI. It returns an array of Pokémon names and URLs. This hook is used in the <code>ResourceList</code> component to display the list of Pokemon.</p>
  <pre><code>
import { useState, useEffect } from 'react';

const usePokemonList = () => {
  const [resources, setResources] = useState<PokemonSummary[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
      const data = await response.json();
      setResources(data.results);
    };

    fetchData();
  }, []);

  return { resources };
};
  </code></pre>

  <h3>usePokemonDetail</h3>
  <p>The <code>usePokemonDetail</code> hook fetches detailed information for a given Pokémon using its ID. It retrieves data such as stats, abilities, and moves.</p>
  <pre><code>
import { useState, useEffect } from 'react';
import { Pokemon, Species } from '../types/pokemon';

const usePokemonDetail = (id: string) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [species, setSpecies] = useState<Species | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
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
  </code></pre>

  <h2 id="configuration">Configuration</h2>

  <h3>Environment Variables</h3>
  <p>You can set environment variables in a <code>.env</code> file for configuration. For example, to configure the base API URL, you can define the following:</p>
  <pre><code>
REACT_APP_POKEAPI_BASE_URL=https://pokeapi.co/api/v2
  </code></pre>
  <p>Then use it in your application like this:</p>
  <pre><code>
const POKEAPI_BASE_URL = process.env.REACT_APP_POKEAPI_BASE_URL;
  </code></pre>

  <h2>License</h2>
  <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

  <h2>Acknowledgments</h2>
  <ul>
    <li><a href="https://pokeapi.co/">PokeAPI</a> for providing the Pokemon data.</li>
    <li><a href="https://mantine.dev/">Mantine</a> for the UI components.</li>
  </ul>

</body>
</html>
