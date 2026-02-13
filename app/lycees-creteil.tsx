import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../constants/theme';

import data from '../assets/lycees-donnees-generales-v1.json';

export default function LyceesCreteils() {
  const router = useRouter();

  function filterLyceesCreteil() {
    return data.filter(lycee => lycee.academie === 'Créteil');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des lycées de l'académie de Créteil</Text>
      <FlatList
        data={filterLyceesCreteil()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.listItem}>{item.nom_etablissement}</Text>
          </View>
        )}
      />
      <Pressable onPress={() => router.back()}>
        <Text style={styles.blueButton}>Retour</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
