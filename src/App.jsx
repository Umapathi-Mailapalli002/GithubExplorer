import React, {useState} from 'react';
import GetStartedScreen from './screens/GetStartedScreen';
import SearchBar from './components/SearchBar';
import ListCard from './components/ListCard';
import NavigationBottom from './components/NavigationBottom';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider, MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import ToggleButton from './components/ToggleButton';
import SearchScreen from './screens/SearchScreen';
import AppNavigation from './navigation/AppNavigation';
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
    const onToggleSwitch = () => setIsDarkMode(!isDarkMode);
  return (
    <>
      <SafeAreaProvider>
        <PaperProvider theme={isDarkMode ? MD3DarkTheme : MD3LightTheme}>
          <ToggleButton isDarkMode={isDarkMode} onToggleSwitch={onToggleSwitch}/>
       <AppNavigation />
        </PaperProvider>
      </SafeAreaProvider>
    </>
  );
}

