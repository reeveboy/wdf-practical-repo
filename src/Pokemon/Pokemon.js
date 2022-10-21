import React, { useEffect, useState } from "react";
import axios from "axios";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
      setPokemons(res.data.results);
    });
  }, []);
  console.log(pokemons);
  return (
    <div className="grid grid-cols-3 gap-1">
      {pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Pokemons;

function Pokemon({ pokemon }) {
  return (
    <div className="p-4">
      <div className="flex flex-col">
        {/* <img src={pokemon.url} alt="" /> */}
        <span className="capitalize text-xl tracking-tight text-gray-900 dark:text-white">
          {pokemon.name}
        </span>
      </div>
    </div>
  );
}
