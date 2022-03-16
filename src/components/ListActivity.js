import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const data = [
  {
    id: "1",
    status: "up",
    name: "Payoneer Payment",
    money: "$128.67",
    date: "Today, 12:18 PM",
  },
  {
    id: "2",
    status: "down",
    name: "Deposit EBL Bank",
    money: "$50.28",
    date: "Today, 10:43 PM",
  },
  {
    id: "3",
    status: "up",
    name: "Apple Gift Card",
    money: "$49361",
    date: "Today, 8:32 PM",
  },
];

const ListActivity = ({ color }) => {
  const renderItem = (item) => {
    return (
      <View key={item.id} style={styles.cardContainer}>
        {item.status === "up" ? (
          <Ionicons size={30} color="green" name="trending-up" />
        ) : (
          <Ionicons size={30} color="red" name="trending-down" />
        )}
        <View style={styles.cardBody}>
          <Text style={[styles.cardTitle, { color }]}>{item.name}</Text>
          <Text style={styles.cardDate}>{item.date}</Text>
        </View>
        <View>
          <Text style={[styles.cardMoney, { color }]}>{item.money}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RECENT ACTIVITY</Text>
      <View style={styles.list}>{data.map((e) => renderItem(e))}</View>
    </View>
  );
};

export default ListActivity;

const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
    color: "gray",
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    // borderBottomColor: "#E9E9E9",
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  cardBody: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  list: {
    paddingHorizontal: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  cardDate: {
    color: "gray",
    marginTop: 6,
  },
  cardMoney: {
    fontSize: 18,
    fontWeight: "700",
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
