import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";
import ListActivity from "../components/ListActivity";
import ListCard from "../components/ListCard";

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const color = isDarkMode ? "#FFF" : "#2e2d2d";
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: isDarkMode ? "#313131" : "#ffffff",
          },
        ]}
      >
        <Header isDarkMode={isDarkMode} />
        <ListCard />
        <View style={styles.darkMode}>
          <Text style={[styles.text, { color }]}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "gray", true: "#745d7d" }}
            thumbColor="#eee"
            value={isDarkMode}
            onValueChange={() => setIsDarkMode(!isDarkMode)}
          />
        </View>
        <ListActivity color={color} />
      </SafeAreaView>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  darkMode: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    borderBottomWidth: 1,
    // borderBottomColor: "#e9e9e9",
    borderBottomColor: "rgba(0,0,0,0.2)",
    paddingVertical: 5,
  },
  text: {
    color: "#222",
    fontSize: 16,
  },
});
