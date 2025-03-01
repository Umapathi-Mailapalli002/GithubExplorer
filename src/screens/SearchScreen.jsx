import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import ListCard from '../components/ListCard'
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { searchRepo } from '../services/api';
const SearchScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const response = searchRepo('mailapalli002');
    console.log(response);
  })
  return (
   <>
   <Appbar.Header>
      <Appbar.BackAction onPress={() => {navigation.navigate("GetStarted")}} />
    </Appbar.Header>
    <View style={styles.container}>
        <View style={styles.searchbarContainer}>
        <SearchBar />
        </View>
      <ListCard />
    </View>
   </>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    searchbarContainer: {
        marginBottom: 35
    }
})