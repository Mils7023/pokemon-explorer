"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PokemonImage } from "../PokemonProfile";

export const PokemonCard = ({ id, name }) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const router = useRouter();

  const handleDetailClick = () => {
    setIsButtonLoading(true);
    router.push(`/pokemon/${id}`);
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card text-center">
        <PokemonImage
          id={id}
          name={name}
          width={150}
          height={150}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{name}</h5>
          <button
            href={`/pokemon/${id}`}
            className="btn btn-primary"
            onClick={handleDetailClick}
            disabled={isButtonLoading}
          >
            {isButtonLoading ? "Loading..." : "View Details"}
          </button>
        </div>
      </div>
    </div>
  );
};
