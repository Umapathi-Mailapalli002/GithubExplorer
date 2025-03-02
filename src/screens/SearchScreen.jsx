import {StyleSheet, View, Image} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import SearchBar from '../components/SearchBar';
import ListCard from '../components/ListCard';
import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {searchRepo} from '../services/api';
import {FlatList} from 'react-native-gesture-handler';
import notFoundImage from '../assets/not_found.png';
import searchImage from '../assets/search_repo.webp'
const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchVal, setSearchVal] = useState('');
  const [repos, setRepos] = useState([]);
  const theme = useTheme();
  const handleClick = (item) => {
    navigation.navigate('repo-details', item);
  }
  useEffect(() => {
    let timer;
    // Create an async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await searchRepo(searchVal);
        console.log(response.items); // Log the response once it's resolved
        setRepos(response?.items);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    timer = setTimeout(() => {
      if (searchVal) {
        fetchData();
      }
    }, 500);

    return () => clearTimeout(timer); // Cleanup the timer on unmount or dependency change
  }, [searchVal]);

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate('GetStarted');
          }}
        />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={styles.searchbarContainer}>
          <SearchBar value={searchVal} onChange={setSearchVal} />
        </View>
        {searchVal === '' ? <View>
            <Image
              style={{height: 300, width: '100%'}}
              source={searchImage}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
                textAlign: 'center',
                color: theme.colors.onBackground,
              }}>
              Search Repositories
            </Text>
          </View> : repos?.length > 0 ? (
          <FlatList
            data={repos}
            renderItem={({item}) => (
              <ListCard
                title={item?.full_name}
                des={item?.description}
                img={item?.owner?.avatar_url}
                updatedDate={item?.updated_at}
                langUsed={item?.language}
                click={() => handleClick(item)}
              />
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <View>
            <Image
              style={{height: 300, width: '100%'}}
              source={notFoundImage}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
                textAlign: 'center',
                color: theme.colors.onBackground,
              }}>
              Your search did not match any repositories
            </Text>
          </View>
        )}
      </View>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 600,
  },
  searchbarContainer: {
    marginBottom: 15,
  },
});
