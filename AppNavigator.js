import React from "react";
import { createStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";

const { Navigator, Screen } = createStackNavigator;

const AppNavigator = () => {
  <NavigationContainer>
    <Navigator initialRouteName="Login">
      <Screen name="Login" component={Login}></Screen>
    </Navigator>
  </NavigationContainer>;
};

export default AppNavigator;
