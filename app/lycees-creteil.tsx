import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../constants/theme';

import data from '../assets/lycees-donnees-generales-v1.json';

export default function LyceesCreteils() {
  const router = useRouter();

  function filterLyceesCreteil() {
    return data.filter(lycee => lycee.academie === 'Créteil');
  }

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}
