import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import GetStartedScreen from "../screens/GetStartedScreen";
import NavigationBottom from "../components/NavigationBottom";
import RepositoryDetails from "../screens/RepositoryDetailsScreen";

const Stack = createStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Main" component={NavigationBottom} />
      <Stack.Screen name="repo-details" component={RepositoryDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
