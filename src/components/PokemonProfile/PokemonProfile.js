"use client";

import { PokemonImage, PokemonInfo } from "@/components";

export const PokemonProfile = ({ pokemon, id }) => {
  if (!pokemon) {
    return (
      <div className="text-center py-5 text-danger">Pokemon not found.</div>
    );
  }

  const { name, types, abilities, stats } = pokemon;

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <PokemonImage
            id={parseInt(id)}
            name={name}
            width={250}
            height={250}
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <PokemonInfo
            name={name}
            types={types}
            abilities={abilities}
            stats={stats}
          />
        </div>
      </div>
    </div>
  );
};
