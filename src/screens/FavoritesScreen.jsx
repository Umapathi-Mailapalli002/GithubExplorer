import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>--- Favorites ---</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 600,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 700,
    marginVertical: 20,
  },
});
