import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import ListCard from '../components/ListCard'
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { searchRepo } from '../services/api';
import { FlatList } from 'react-native-gesture-handler';
const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchVal, setSearchVal] = useState('')
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    let timer;
  
    // Create an async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await searchRepo(searchVal);
        console.log(response.items); // Log the response once it's resolved
        setRepos(response?.items)
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
  
    timer = setTimeout(() => {
      fetchData(); // Call the async function inside setTimeout
    }, 500);
  
    return () => clearTimeout(timer); // Cleanup the timer on unmount or dependency change
  }, [searchVal]);
  
  return (
   <>
   <Appbar.Header>
      <Appbar.BackAction onPress={() => {navigation.navigate("GetStarted")}} />
    </Appbar.Header>
    <View style={styles.container}>
        <View style={styles.searchbarContainer}>
        <SearchBar value={searchVal} onChange={setSearchVal}/>
        </View>
        <FlatList data={repos} renderItem={({item}) => <ListCard />} keyExtractor={item => item.id}/>
    </View>
   </>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        height: 600
    },
    searchbarContainer: {
        marginBottom: 15
    }
})