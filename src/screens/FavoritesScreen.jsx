import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
const FavoritesScreen = () => {
  return (
    <View>
      <Text style={styles.heading}>--- Favorites ---</Text>
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 700,
    marginVertical: 20
  }
})