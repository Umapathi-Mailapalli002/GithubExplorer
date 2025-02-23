import React from "react";
import { useTheme } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function GetStartedScreen() {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleGetStarted = () => {
    // Replace the current screen with the main flow
    navigation.replace("Main");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
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
      <Button onPress={handleGetStarted} mode="contained" style={styles.button}>
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
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    fontWeight: "600",
    color: "#989",
    marginBottom: 30,
  },
  button: {
    width: "80%",
  },
});
