import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {
  const [name, setName] = useState("");
  const [hp, setHP] = useState("");
  const [frontSprite, setFrontSprite] = useState("");
  const [backSprite, setBackSprite] = useState("");
  const [submittedData, setSubmittedData] = useState("");

  function handleNewName(event) {
    setName(event.target.value);
  }

  function handleNewHP(event) {
    setHP(event.target.value);
  }

  function handleNewFrontSprite(event) {
    setFrontSprite(event.target.value);
  }

  function handleNewBackSprite(event) {
    setBackSprite(event.target.value);
  }

  function handleSubmit(e) {

    e.preventDefault();
    const pokemonData = {
        name: name,
        hp: parseInt(hp),
        sprites: {
          front: frontSprite,
          back: backSprite,
        }
    }

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemonData),
    })
    .then(res => res.json())
    .then((newPokemon) => setSubmittedData(newPokemon))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        classname="NewPokemon"
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleNewName} value={name} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleNewHP} value={hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleNewFrontSprite}
            value={frontSprite}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleNewBackSprite}
            value={backSprite}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;