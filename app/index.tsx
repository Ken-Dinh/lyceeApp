import { Text, View } from "react-native";
import { styles } from "../constants/theme";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'application d'analyse des lycées!</Text>
      <Link style={styles.blueButton} href="/lycees-creteil">Liste des lycées de Créteil</Link>
      <Link style={styles.blueButton} href="/lycees-prives-paris">Lycées privés à Paris</Link>
      <Link style={styles.blueButton} href="/types-lycees">Types de lycées</Link>
      <Link style={styles.blueButton} href="/email-lycees-versailles">Adresse mail des lycées de Versailles</Link>
      <Link style={styles.blueButton} href="/nombre-lycees-paris">Nombre de lycées à Paris</Link>
    </View>
  );
}
