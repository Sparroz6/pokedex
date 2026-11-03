import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function Aide() {
    const [estVu, setEstVu]=useState(false);
    return(
        <View>
        <Pressable onPress={()=>setEstVu(!estVu)}>
            <Text>{ estVu ? "Masquer l'aide" : "Afficher l'aide"}</Text>
        </Pressable>

        <Text>{estVu && "Voilà de l'aide"}</Text>
    </View>
    );
}