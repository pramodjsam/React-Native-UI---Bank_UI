import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ImageButton = ({ onPress, source, color }) => {
  return (
    <Pressable onPress={onPress}>
      {/* <Image style={[styles.icon, { tintColor: color }]} source={source} /> */}
      <Ionicons size={30} name={source} color={color} style={styles.icon} />
    </Pressable>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
