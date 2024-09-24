import Image from 'next/image';

export const PokemonImage = ({ id, name, height, width, className }) => {
  return (
    <div className="text-center">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        width={height}
        height={width}
        className={className}
      />
    </div>
  );
}


