import { Card, Loader, Tabs, Badge, Group, Button } from "@mantine/core";
import { useParams, useNavigate } from "react-router-dom";
import usePokemonDetail from "../../hooks/usePokemonDetail";
import "./ResourceDetail.scss";

const ResourceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pokemon, species } = usePokemonDetail(id as string);

  if (!pokemon) return <Loader />;

  return (
    <div className="resource-detail-container">
      <Button variant="outline" onClick={() => navigate(-1)} mb="md">
        ← Back
      </Button>

      <Card className="resource-card" shadow="sm" padding="lg" radius="md" withBorder>
        <h2 className="pokemon-name">{pokemon.name.toUpperCase()}</h2>
        <Group position="center" mb="md">
          <img
            className="pokemon-image"
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name} front`}
          />
          <img
            className="pokemon-image"
            src={pokemon.sprites.back_default}
            alt={`${pokemon.name} back`}
          />
        </Group>

        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Base Experience: {pokemon.base_experience}</p>
        <p>Species: {species ? species.name : "Loading..."}</p>
        <p>Color: {species ? species.color.name : "Loading..."}</p>

        <Tabs defaultValue="abilities" mt="md">
          <Tabs.List>
            <Tabs.Tab value="abilities">Abilities</Tabs.Tab>
            <Tabs.Tab value="stats">Stats</Tabs.Tab>
            <Tabs.Tab value="moves">Moves</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="abilities" pt="xs">
            {pokemon.abilities.map((ab: any, i: number) => (
              <Badge key={i} color="teal" variant="light" mr="xs">
                {ab.ability.name}
              </Badge>
            ))}
          </Tabs.Panel>

          <Tabs.Panel value="stats" pt="xs">
            {pokemon.stats.map((st: any, i: number) => (
              <p key={i}>
                {st.stat.name}: <strong>{st.base_stat}</strong>
              </p>
            ))}
          </Tabs.Panel>

          <Tabs.Panel value="moves" pt="xs">
            <div className="moves-list">
              {pokemon.moves.slice(0, 10).map((mv: any, i: number) => (
                <Badge key={i} color="grape" variant="light" mr="xs" mb="xs">
                  {mv.move.name}
                </Badge>
              ))}
              {pokemon.moves.length > 10 && <p>+ {pokemon.moves.length - 10} more</p>}
            </div>
          </Tabs.Panel>
        </Tabs>
      </Card>
    </div>
  );
};

export default ResourceDetail;
