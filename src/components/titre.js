import { Text, StyleSheet } from "react-native";

export default function Titre({ nombre }) {
  return <Text style={styles.titre}>Mon Pokédex ({nombre})</Text>;
}

const styles = StyleSheet.create({
  titre: { fontSize: 32, fontWeight: "bold", marginBottom: 16 },
});