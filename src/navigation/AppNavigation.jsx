import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import GetStartedScreen from "../screens/GetStartedScreen";
import NavigationBottom from "../components/NavigationBottom";

const Stack = createStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Main" component={NavigationBottom} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
