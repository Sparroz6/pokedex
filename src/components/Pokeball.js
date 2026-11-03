import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function Pokeball() {
  const [pokeball, setPokeball] = useState(0);
  return (
    <View>
      <Text>Pokéball : {pokeball}</Text>
      <Pressable onPress={() => setPokeball(pokeball + 1)}>
        <Text>+</Text>
      </Pressable>
      <Pressable onPress={() => setPokeball(Math.max(0, pokeball - 1))}>
        <Text>-</Text>
      </Pressable>
      <Pressable onPress={() => setPokeball(0)}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
}