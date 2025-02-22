import React, {useState} from 'react';
import GetStartedScreen from './screens/GetStartedScreen';
import SearchBar from './components/SearchBar';
import ListCard from './components/ListCard';
import NavigationBottom from './components/NavigationBottom';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider, MD3DarkTheme, MD3LightTheme, useTheme} from 'react-native-paper';
import {Button} from 'react-native-paper';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native';
import {Switch} from 'react-native-paper';
import { View } from 'react-native';
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const onToggleSwitch = () => setIsDarkMode(!isDarkMode);
  const theme = useTheme()
  return (
    <>
      <SafeAreaProvider>
        <PaperProvider theme={isDarkMode ? MD3DarkTheme : MD3LightTheme}>
          <View style={{height: 50, display: 'flex', flexDirection: 'row', gap: 12, justifyContent:'flex-end', alignItems:'center', backgroundColor: theme.colors.background}}>
          <Text style={{fontWeight: 700}}>{isDarkMode ? "Dark Mode Activated": "Light Mode Activated"}</Text><Switch value={isDarkMode} onValueChange={onToggleSwitch} />
          </View>
        <GetStartedScreen />
          <SearchBar />
          {/* <ListCard /> */}
          <NavigationBottom />
        </PaperProvider>
      </SafeAreaProvider>
    </>
  );
}

