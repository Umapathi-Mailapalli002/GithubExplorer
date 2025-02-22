import React, {useState} from 'react';
import GetStartedScreen from './screens/GetStartedScreen';
import SearchBar from './components/SearchBar';
import ListCard from './components/ListCard';
import NavigationBottom from './components/NavigationBottom';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider, MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import {Button} from 'react-native-paper';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native';
import {Switch} from 'react-native-paper';
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const onToggleSwitch = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <SafeAreaProvider>
        <PaperProvider theme={isDarkMode ? MD3DarkTheme : MD3LightTheme}>
        <GetStartedScreen />
        <Switch value={isDarkMode} onValueChange={onToggleSwitch} /><Text>{isDarkMode ? "Dark Mode Activated": "Light Mode Activated"}</Text>
          <SearchBar />
          <ListCard />
          <NavigationBottom />
        </PaperProvider>
      </SafeAreaProvider>
    </>
  );
}

const styles = {
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
};
