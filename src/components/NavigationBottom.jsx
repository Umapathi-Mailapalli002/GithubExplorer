import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const ExploreRoute = () => <SearchScreen />;
const FavoritesRoute = () => <FavoritesScreen />;

const NavigationBottom = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'explore', title: 'Explore', focusedIcon: 'account-search', unfocusedIcon: 'account-search-outline' },
    { key: 'favorite', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    explore: ExploreRoute,
    favorite: FavoritesRoute,
    
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default NavigationBottom;