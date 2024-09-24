
export const PokemonInfo = ({ name, types, abilities, stats }) => {
  return (
    <div>
      <h1 className="text-capitalize mb-4">{name}</h1>

      <h4>Type:</h4>
      <ul className="list-group mb-3">
        {types.map((type) => (
          <li className="list-group-item text-capitalize" key={type.type.name}>
            {type.type.name}
          </li>
        ))}
      </ul>

      <h4>Abilities:</h4>
      <ul className="list-group mb-3">
        {abilities.map((ability) => (
          <li className="list-group-item text-capitalize" key={ability.ability.name}>
            {ability.ability.name}
          </li>
        ))}
      </ul>

      <h4>Stats:</h4>
      <ul className="list-group">
        {stats.map((stat) => (
          <li className="list-group-item" key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
