import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "../screen/Chat";
import Find from "../screen/Find/index";
import Home from "../screen/Home/index";
import Post from "../screen/Post/index";
import Setting from "../screen/Setting/index";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => ( 
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
      shadowOpacity: 0.3,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#2a363b",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          height: 90,
          borderRadius: 15,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="home"
                size={30}
                style={{ color: focused ? "#000" : "#bdbdbd" }}
              />
              <Text
                style={{ color: focused ? "#000" : "#bdbdbd", fontSize: 12 }}
              >
                Home
              </Text>
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="search"
                size={30}
                style={{ color: focused ? "#000" : "#bdbdbd" }}
              />
              <Text
                style={{
                  color: focused ? "#000" : "#bdbdbd",
                  fontSize: 12,
                  left: 5,
                }}
              >
                Find
              </Text>
            </View>
          ),
        }}
        name="Find"
        component={Find}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="arrow-up"
              size={40}
              style={{ color: focused ? "#000" : "#bdbdbd" }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        name="Post"
        component={Post}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="chatbubbles"
                size={30}
                style={{ color: focused ? "#000" : "#bdbdbd" }}
              />
              <Text
                style={{ color: focused ? "#000" : "#bdbdbd", fontSize: 12 }}
              >
                Chat
              </Text>
            </View>
          ),
        }}
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="settings"
                size={30}
                style={{ color: focused ? "#000" : "#bdbdbd" }}
              />
              <Text
                style={{
                  color: focused ? "#000" : "#bdbdbd",
                  fontSize: 12,
                  right: 5,
                }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
        name="Setting"
        component={Setting}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
