import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import { UserContext } from "./context/UserContext";

const Stack = createNativeStackNavigator();

function App() {
  const [currentUser, setCurrentUser] = useState();

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {currentUser ? (
        <DashboardScreen></DashboardScreen>
      ) : (
        <LoginScreen></LoginScreen>
      )}
    </UserContext.Provider>
  );
}

export default App;
