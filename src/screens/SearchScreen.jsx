import { StyleSheet, View, Image } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchBar from '../components/SearchBar';
import ListCard from '../components/ListCard';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { searchRepo } from '../services/api';
import { FlatList } from 'react-native-gesture-handler';
import notFoundImage from '../assets/not_found.png';
import searchImage from '../assets/search_repo.webp';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchVal, setSearchVal] = useState('');
  const [repos, setRepos] = useState([]);
  const [favoriteRepos, setFavoriteRepos] = useState([]); // Store the favorite repositories
  const theme = useTheme();

  const handleClick = (item) => {
    navigation.navigate('repo-details', { state: item });
  };

  // Fetch favorites from AsyncStorage
  const fetchFav = async () => {
    try {
      const storedFavs = await AsyncStorage.getItem('favorites');
      const favorites = storedFavs ? JSON.parse(storedFavs) : [];
      setFavoriteRepos(favorites); // Update the state with the favorite repos
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  useEffect(() => {
    fetchFav(); // Fetch favorites when the component mounts
  }, []); // This will run only once when the component mounts

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchRepo(searchVal);
        setRepos(response?.items);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    const timer = setTimeout(() => {
      if (searchVal) {
        fetchData();
      }
    }, 500);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [searchVal]);

  // Handle favorite toggling
  const handleClickFav = async (item) => {
    try {
      const storedFavs = await AsyncStorage.getItem('favorites');
      let favorites = storedFavs ? JSON.parse(storedFavs) : [];

      const isAlreadyFav = favorites.some((fav) => fav.id === item.id);
      if (isAlreadyFav) {
        favorites = favorites.filter((fav) => fav.id !== item.id); // Remove from favorites if already in favorites
      } else {
        favorites.push(item); // Add to favorites
      }

      await AsyncStorage.setItem('favorites', JSON.stringify(favorites)); // Save the updated favorites
      setFavoriteRepos(favorites); // Update the state with new favorites
    } catch (error) {
      console.error('Error saving favorite:', error);
    }
  };

  // Check if a repo is favorite
  const isFavorite = (repoId) => {
    console.log(repoId)
    console.log(favoriteRepos.some((fav) => fav.id === repoId))
    return favoriteRepos.some((fav) => fav.id === repoId); // Check if the repo is in favorites
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('GetStarted')} />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={styles.searchbarContainer}>
          <SearchBar value={searchVal} onChange={setSearchVal} />
        </View>
        {searchVal === '' ? (
          <View>
            <Image style={{ height: 300, width: '100%' }} source={searchImage} />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
                textAlign: 'center',
                color: theme.colors.onBackground,
              }}
            >
              Search Repositories
            </Text>
          </View>
        ) : repos?.length > 0 ? (
          <FlatList
            data={repos}
            renderItem={({ item }) => (
              <ListCard
                key={item.id}
                title={item?.full_name}
                des={item?.description}
                img={item?.owner?.avatar_url}
                updatedDate={item?.updated_at}
                langUsed={item?.language}
                click={() => handleClick(item)}
                showFav={true}
                isFav={isFavorite(item.id)} // Pass the correct favorite status
                onHeartClick={() => handleClickFav(item)} // Handle the heart click
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <View>
            <Image style={{ height: 300, width: '100%' }} source={notFoundImage} />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
                textAlign: 'center',
                color: theme.colors.onBackground,
              }}
            >
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
