import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Main from "../screens/Main";
import Home from "../screens/Home";
import File from "../screens/File";
import User from "../screens/User";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();
const w = Dimensions.get("window").width;

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: "#444444",
        tabBarInactiveTintColor: "#444444",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.iconContainer(focused)}>
              <Ionicons name="home" size={size} color={color} />
              {focused && (
                <Text style={{ marginLeft: 5, color: "#444444" }}>Menu</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.iconContainer(focused)}>
              <Ionicons name="card" size={size} color={color} />
              {focused && (
                <Text style={{ marginLeft: 5, color: "#444444" }}>Card</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="File"
        component={File}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.iconContainer(focused)}>
              <Ionicons name="folder" size={size} color={color} />
              {focused && (
                <Text style={{ marginLeft: 5, color: "#444444" }}>Files</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.iconContainer(focused)}>
              <Ionicons name="person" size={size} color={color} />
              {focused && (
                <Text style={{ marginLeft: 5, color: "#444444" }}>User</Text>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: (focused) => ({
    flexDirection: "row",
    width: w / 4 - 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: focused ? "#bebabf" : "transparent",
    borderRadius: 30,
    height: 40,
  }),
});

export default TabNavigator;
