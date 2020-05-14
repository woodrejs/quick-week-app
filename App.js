import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("dziala");
  return (
    <View style={styles.container}>
      <Text>moj teks kolejny</Text>
      <Text style={styles.container}>moj teks kolejny</Text>
      <Text>moj teks koxxlejny</Text>
      <Text>moj teks kolejny</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
