import { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const ARTWORK =
"https://raw.githubusercontent.com/PokeAPI/sprites" +
"/master/sprites/pokemon/other/official-artwork/";

const TYPE_COLORS = {
  Plante: "#7ac74c",
  Feu: "#ee482f",
  Eau: "#6390f0",
  Électrik: "#f7d02c",
  Poison :"#b600ac",
  Insecte: "#71ac18",
  Sol:"#dbd25e",
  Fée:"#fc62e5",
  Combat:"#fda923",
  Psy:"#e8009f",
  Roche:"#807e7e",
  Spectre:"#700081",
};

export default function PokemonCard({ number, name, type, capture, onPress }) {
  return (
    <View style={[styles.card, capture && styles.capture]}>
      <Image
        source={{ uri: `${ARTWORK}${number}.png` }}
        style={styles.image}
      />
      <View>
        <Text style={styles.number}>#{number}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={[styles.type, { backgroundColor: TYPE_COLORS[type] ?? "#bababa" }]}>
          {type}
        </Text>
        <Pressable
          onPress={onPress}
          style={[styles.bouton, capture && styles.boutonCapture]}
        >
          <Text style={[styles.boutonTexte, capture && styles.boutonTexteCapture]}>
            {capture ? "Capturé ✓" : "Capturer"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        flex:1,
        alignItems:"center",
        backgroundColor:"#d3cdcd",
        borderRadius :16,
        padding:12,
        marginBottom: 12,
        gap:16,
    },
    image: {width:80, height:80}, 
    number: {color:"#447e9c"},
    name: { fontSize: 20, fontWeight: "bold",textAlign:"center"},
    capture: { borderWidth: 2, borderColor: "#ee6b2f" },
    type: { 
      color:"#000000",
      alignItems:"center",
      borderRadius:16,
      backgroundColor:"#bababa",
      padding:10,
      marginRight:15,
      fontWeight:"bold",
    },
    bouton: {
      marginTop: 8,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: "#2f58ee",
      alignItems: "center",
    },
    boutonCapture: {
      backgroundColor: "#2f58ee",
    },
    boutonTexte: {
      color: "#2f58ee",
      fontWeight: "bold",
    },
    boutonTexteCapture: {
      color: "#fff",
    },
});
