import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../constants/theme';

import data from '../assets/lycees-donnees-generales-v1.json';

export default function NombreLyceesParis() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Le nombre de lycées des académies de la région parisienne</Text>
      <Text style={styles.listItem}>{data.length}</Text>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.blueButton}>Retour</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
