import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
export default function GetStartedScreen() {

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text variant="headlineLarge" style={styles.title}>
        GitHub Explorer
      </Text>

      {/* Description */}
      <Text variant="bodyLarge" style={styles.description}>
        Discover and explore GitHub repositories effortlessly. Search, view details, 
        and save your favorite repositories with ease!
      </Text>

      {/* Get Started Button */}
      <Button
        mode="contained"
        style={styles.button}
      >
        Get Started
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },
  button: {
    width: "80%",
  },
});
