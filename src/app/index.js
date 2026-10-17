import { ScrollView } from "react-native";
import Titre from "../components/titre";
import PokemonCard from "../components/PokemonCard";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Électrique" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" },
];

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingTop: 60 }}>
      <Titre nombre={POKEMONS.length} />
      {POKEMONS.map((pokemon) => (
        <PokemonCard
          key={pokemon.number}
          number={pokemon.number}
          name={pokemon.name}
          type={pokemon.type}
        />
      ))}
    </ScrollView>
  );
}