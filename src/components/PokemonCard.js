import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [sprites, setBackSprites] = useState(pokemon.sprites.front);
  console.log(sprites)
  function handleClick() {
    if ((sprites) === (pokemon.sprites.front)) {
    setBackSprites(pokemon.sprites.back)
    } else if ((sprites) === (pokemon.sprites.back)) {
      setBackSprites(pokemon.sprites.front)
  }
}
  return (
    <Card>
      <div>
        <div onClick={handleClick} className="image">
          <img src={sprites} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
