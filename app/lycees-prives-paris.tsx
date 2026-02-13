import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../constants/theme';

import data from '../assets/lycees-donnees-generales-v1.json';

export default function LyceesPrivesParis() {
  const router = useRouter();

  function filterLyceesPrivesParis() {
    return data.filter(lycee => lycee.statut === 'privé');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des lycées privés de la région parisienne</Text>
      <FlatList
        data={filterLyceesPrivesParis()}
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
