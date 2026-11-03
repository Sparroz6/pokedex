import { useState } from "react";
import { ScrollView, Pressable, Text } from "react-native";
import Titre from "../components/titre";
import PokemonCard from "../components/PokemonCard";
import Pokeball from "../components/Pokeball";
import Aide from "../components/Aide";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Électrique" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" },
];

export default function Index() {
  const [feuSeulement, setFeuSeulement] = useState(false);
  const pokemonsAffiches = feuSeulement ? POKEMONS.filter((pokemon) => pokemon.type === "Feu") : POKEMONS;
  
  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingTop: 60 }}>
      <Titre nombre={pokemonsAffiches.length} />
      <Pokeball />

      <Pressable onPress={() => setFeuSeulement(!feuSeulement)}>
        <Text>{feuSeulement ? "Tout afficher" : "Type Feu seulement"}</Text>
      </Pressable>

      {pokemonsAffiches.map((pokemon) => (
        <PokemonCard
          key={pokemon.number}
          number={pokemon.number}
          name={pokemon.name}
          type={pokemon.type}
        />
      ))}
      <Aide />
    </ScrollView>
  );
}