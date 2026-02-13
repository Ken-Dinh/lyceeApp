import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../constants/theme';

import data from '../assets/lycees-donnees-generales-v1.json';

export default function TypesLycees() {
  const router = useRouter();

  function filterNombreLycees(sigleToFind: string) {
    return data.filter(lycee => lycee.sigle_uai.split(' ').some(sigle => sigle === sigleToFind)).length;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Le nombre de chaque type de lycéee</Text>
      <Text style={styles.listItem}>LP: {filterNombreLycees("LP")}</Text>
      <Text style={styles.listItem}>PR: {filterNombreLycees("PR")}</Text>
      <Text style={styles.listItem}>LPO: {filterNombreLycees("LPO")}</Text>
      <Text style={styles.listItem}>LGT: {filterNombreLycees("LGT")}</Text>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.blueButton}>Retour</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}