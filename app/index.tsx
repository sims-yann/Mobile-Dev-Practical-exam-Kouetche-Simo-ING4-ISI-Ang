import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>News update App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex: 1},
  header:{fontWeight: 'bold', textAlign: 'center', fontSize: 20, marginTop: 20},
  footer:{height: 50, backgroundColor: 'gray'},
})
