import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import ListCard from '../components/ListCard'
import NavigationBottom from '../components/NavigationBottom'

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <ListCard />
      <NavigationBottom />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})