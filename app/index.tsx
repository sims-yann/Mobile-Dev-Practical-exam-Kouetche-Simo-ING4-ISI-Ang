import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>News update App</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { fontWeight: 'bold', textAlign: 'center', fontSize: 20 },
  footer: { height: 50, backgroundColor: 'gray' },
})
