import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import ListCard from '../components/ListCard'

const SearchScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.searchbarContainer}>
        <SearchBar />
        </View>
      <ListCard />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    searchbarContainer: {
        marginVertical: 30
    }
})