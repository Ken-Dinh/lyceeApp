import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, Text, View } from 'react-native';
import { styles } from '../constants/theme';

import data from '../assets/lycees-donnees-generales-v1.json';

export default function EmailLyceesVersailles() {
  const router = useRouter();

  function filterEmailLyceesVersailles() {
    return data.filter(lycee => lycee.academie === 'Versailles');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Les adresses mail des lycée de l'académie de Versailles</Text>
      <FlatList
        data={filterEmailLyceesVersailles()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.listItem}>{item.nom_etablissement}: {item.mail}</Text>
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
