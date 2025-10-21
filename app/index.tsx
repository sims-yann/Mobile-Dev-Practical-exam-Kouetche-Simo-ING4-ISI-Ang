import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const [allnews, setAllNews] = useState([]);
  const [news, setNews] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>News update App</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter news title"
          value={news}
          onChangeText={setNews}
        />
        <View style={styles.addbutton}>
          <Button title="Add News" color="white"/>
        </View>
        <Text>{news}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { fontWeight: 'bold', textAlign: 'center', fontSize: 20 },
  footer: { height: 50, backgroundColor: 'gray' },
  input: { borderWidth: 1, borderColor: 'black', padding: 10, margin: 10, borderRadius: 8},
  addbutton: {color: 'white', backgroundColor: 'blue', padding: 10, margin: 45, borderRadius: 8, alignItems: 'center' },
})
