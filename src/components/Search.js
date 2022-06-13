import React, { useState } from "react";

function Search({ pokemon }) {
  const [search, setSearch] = useState('');
  const pokemonToDisplay = pokemon.filter((pokemon) => {
    return pokemon
  })

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type="text" className="prompt" placeholder="Search..." />
        <i className="search icon"/>
      </div>
    </div>
  );
}

export default Search;