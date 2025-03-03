import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import notFoundImage from '../assets/not_found.png';
import { useTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListCard from '../components/ListCard';
import { useNavigation } from '@react-navigation/native';
const FavoritesScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation()
  const [repos, setRepos] = useState([])
  const handleClick = (item) => {
    navigation.navigate('repo-details', {state: item});
  }
  useEffect(() => {
    const fetchFav = async() => {
      try {
        const res = await AsyncStorage.getItem('favorites')
        const parsedRes = res ? JSON.parse(res) : []; // Parse JSON string
        setRepos(parsedRes);
        console.log(parsedRes);
      } catch (error) {
        console.log("Error on fethcing favorites", error);
      }
    }
    fetchFav();
  }, [repos])
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>--- Favorites ---</Text>
     {repos?.length > 0 ? 
          <FlatList
            data={repos}
            renderItem={({item}) => (
              <ListCard
                title={item?.full_name}
                des={item?.description}
                img={item?.owner?.avatar_url}
                updatedDate={item?.updated_at}
                langUsed={item?.language}
                showFav={false}
                click={() => handleClick(item)}
                
              />
            )}
            keyExtractor={item => item?.id}
          />
         : 
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
              No Favorites Available
            </Text>
          </View>
        }
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
