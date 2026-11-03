import { useState } from "react";
import { Pressable, Text, View, FlatList } from "react-native";
import POKEMONS from "../data/pokemons";
import PokemonCard from "../components/PokemonCard";
import Pokeball from "../components/Pokeball";
import Aide from "../components/Aide";

export default function Index() {
  const [captures, setCaptures] = useState([]);
  const [capturesSeulement, setCapturesSeulement] = useState(false);

  const toggleCapture = (number) => {
    setCaptures(
      captures.includes(number)
        ? captures.filter((n) => n !== number)
        : [...captures, number]
    );
  };

  const pokemonsAffiches = capturesSeulement
    ? POKEMONS.filter((pokemon) => captures.includes(pokemon.number))
    : POKEMONS;

  return (
    <View style={{ flex: 1 }}>
      <Pokeball />
      <Pressable onPress={() => setCapturesSeulement(!capturesSeulement)}>
        <Text>{capturesSeulement ? "Tout afficher" : "Capturés seulement"}</Text>
      </Pressable>
      <FlatList
        data={pokemonsAffiches}
        keyExtractor={(item) => String(item.number)}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <PokemonCard
            number={item.number}
            name={item.name}
            type={item.type}
            capture={captures.includes(item.number)}
            onPress={() => toggleCapture(item.number)}
          />
        )}
        ListHeaderComponent={
          <Text>
            {POKEMONS.length} Pokémon · {captures.length} capturés
          </Text>
        }
      />
      <Aide />
    </View>
  );
}