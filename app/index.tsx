import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Index() {
  const [allnews, setAllNews] = useState<string[]>([]);
  const [news, setNews] = useState("");

  const addnews = () => {
    if (news.trim() === "") return;
      setAllNews([...allnews, news]);

    setNews("");
  };

  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.taskRow}>
      <Text style={styles.taskText}>{item}</Text>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
          <Button title="Add News" color="white" onPress={addnews}/>
        </View>
        <Text>{allnews}</Text>
      </View>

      {allnews.length === 0 ? (
        <Text style={styles.nonews}>No news available</Text>
      ) : (
        <FlatList
          data={allnews}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item}-${index}`}
        />
      )}
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { fontWeight: 'bold', textAlign: 'center', fontSize: 20 },
  footer: { height: 50, backgroundColor: 'gray' },
  input: { borderWidth: 1, borderColor: 'black', padding: 10, margin: 10, borderRadius: 8},
  addbutton: {color: 'white', backgroundColor: 'blue', padding: 10, margin: 45, borderRadius: 8, alignItems: 'center' },
  nonews: { textAlign: 'center', marginTop: 20, color: 'gray' },
   taskRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  taskText: { fontSize: 16 }
})
