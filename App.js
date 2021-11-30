import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Tabs from "./src/Navigation/tabs";


export default function App() {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}


