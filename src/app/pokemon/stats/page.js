import axios from 'axios';

export const metadata = {
  title: "Pokemon Statistics",
  description: "Explore about your favorite Pokemon!",
  icons: {
    icon: "/icon.png", 
  },
};

async function fetchPokemonStats() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/type/');
    const types = response.data.results;

    const typeCounts = {};

    for (const type of types) {
      const typeData = await axios.get(type.url);
      typeCounts[type.name] = typeData.data.pokemon.length;
    }

    return typeCounts;
  } catch (error) {
    throw new Error('Failed to fetch Pokemon stats.');
  }
}

export default async function StatsPage() {
  let typeCounts;

  try {
    typeCounts = await fetchPokemonStats();
  } catch (error) {
    return <div className="text-center text-danger py-5">{error.message}</div>;
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Pokemon Statistics by Type</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Number of Pokemon</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(typeCounts).map(([typeName, count]) => (
                <tr key={typeName}>
                  <td className="text-capitalize">{typeName}</td>
                  <td>{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
