import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  const [sprites, showBackSprites] = useState([]);

  const getPokedex = pokemon.map((pokemon) => {
    return <PokemonCard pokemon={pokemon} />
  })
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {getPokedex}
    </Card.Group>
  );
}

export default PokemonCollection;
