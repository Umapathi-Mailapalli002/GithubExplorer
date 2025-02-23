import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "../screens/SearchScreen";
import RepositoryDetailsScreen from "../screens/RepositoryDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import NavigationBottom from "../components/NavigationBottom";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SearchStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="RepositoryDetails" component={RepositoryDetailsScreen} />
    </Stack.Navigator>
);

const AppNavigation = () => (
    <NavigationContainer>
        <NavigationBottom />
    </NavigationContainer>
);

export default AppNavigation;
