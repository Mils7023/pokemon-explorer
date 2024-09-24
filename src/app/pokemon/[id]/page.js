import { fetchPokemonDetails } from '@/api/fetchPokemon';
import { PokemonProfile } from '@/components';

export async function generateMetadata({ params }) {
  const { id } = params;
  const data = await fetchPokemonDetails(id);

  return {
    title: `${data.name.charAt(0).toUpperCase() + data.name.slice(1)} - Pokemon Profile`,
    description: `Details about ${data.name.charAt(0).toUpperCase() + data.name.slice(1)} Pokemon.`,
  };
}

export default async function PokemonProfilePage({ params }) {
  const { id } = params;
  const pokemon = await fetchPokemonDetails(id);

  return <PokemonProfile pokemon={pokemon} id={id} />;
}