import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemonCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(data => setPokemonCards(data))
  }, [])

  function handleNewPokemon(newPokemon) {
    setPokemonCards(newPokemon)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={pokemon} />
      <br />
      <Search pokemon={pokemon} />
      <br />
      <PokemonCollection pokemon={pokemon} images={pokemon.sprites} />
    </Container>
  );
}

export default PokemonPage;
