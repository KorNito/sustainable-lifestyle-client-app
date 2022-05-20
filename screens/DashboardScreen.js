import { View, Text, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChallengesScreen from "./ChallengesScreen";
import RewardsScreen from "./RewardsScreen";
import MapScreen from "./MapScreen";
import RatingsScreen from "./RatingsScreen";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

const DashboardScreen = ({ navigation }) => {
  const DashboardStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"Dashboard"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (routeName === "Challenges") {
              iconName = focused ? "list" : "list-outline";
            } else if (routeName === "Rewards") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (routeName === "Map") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (routeName === "Ratings") {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Challenges" component={ChallengesScreen} />
        <Tab.Screen name="Rewards" component={RewardsScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Ratings" component={RatingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default DashboardScreen;
