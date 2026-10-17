import { View, Text, Image, StyleSheet } from "react-native";

const ARTWORK =
"https://raw.githubusercontent.com/PokeAPI/sprites" +
"/master/sprites/pokemon/other/official-artwork/";

export default function PokemonCard({ number, name, type }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `${ARTWORK}${number}.png` }}
        style={styles.image}
      />
      <View>
        <Text style={styles.number}>#{number}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#d3cdcd",
        borderRadius :16,
        padding:12,
        marginBottom: 12,
        gap:16,
    },
    image: {width:80, height:80}, 
    number: {color:"#447e9c"},
    name: { fontSize: 20, fontWeight: "bold"},
    type: { 
      color:"#2a2a2a",
      alignItems:"center",
      borderRadius:16,
      backgroundColor:"#bababa",
      padding:10,
      marginRight:15,
      fontWeight:"bold",
    },
});