import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageButton from "./ImageButton";

const Header = ({ isDarkMode }) => {
  const color = isDarkMode ? "#fff" : "#2e2d2d";
  return (
    <View style={styles.container}>
      <ImageButton color={color} source="arrow-back-outline" />
      <Text style={[styles.title, { color }]}>Saved Cards</Text>
      <ImageButton color={color} source="settings" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 26,
    color: "#2e2d2d",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});
