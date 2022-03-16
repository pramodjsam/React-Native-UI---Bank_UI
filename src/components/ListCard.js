import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const w = Dimensions.get("window").width;

const data = [
  {
    id: "1",
    serial: "1234 5567 9888 4151",
    end: "01/24",
    name: "AB Bank",
    country: "Germany",
    color: "#b560bf",
  },
  {
    id: "2",
    serial: "1234 5567 9888 3422",
    end: "01/24",
    name: "BB Bank",
    country: "US",
    color: "#393839",
  },
  {
    id: "3",
    serial: "1234 5567 9888 1498",
    end: "01/24",
    name: "DFBC",
    country: "Hong Kong",
    color: "#45a7eb",
  },
];

const ListCard = () => {
  const [page, setPage] = useState(0);
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          paddingVertical: page === index ? 0 : 10,
        }}
      >
        <View
          style={[
            styles.cardContainer,
            { backgroundColor: item.color, height: page === index ? 200 : 180 },
          ]}
        >
          <Image
            style={styles.otherImg}
            source={require("../assets/card-other.png")}
          />
          <Text style={styles.cardTitle}>{item.name}</Text>
          <View style={styles.cardSerial}>
            <Text style={styles.cardSerialTitle}>
              {"****   ****   ****   " + item.serial.substr(15, 4)}
            </Text>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={require("../assets/card_icon.png")}
            />
          </View>
          <View style={styles.expContainer}>
            <Text style={styles.expContainerText}>Expiry End</Text>
            <Text style={styles.expContainerTextEnd}>{item.end}</Text>
          </View>
          <View style={styles.itemCountry}>
            <Text style={styles.itemCountryTitle}>{item.country}</Text>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={require("../assets/visa_text.png")}
            />
          </View>
        </View>
      </View>
    );
  };

  const onScroll = ({ nativeEvent }) => {
    const index = Math.round(nativeEvent.contentOffset.x / (w - 80));
    setPage(index);
  };

  const renderIndicator = (e, i) => {
    return (
      <View
        key={e.id}
        style={[
          styles.dot,
          page === i && { height: 15, backgroundColor: "#705b79" },
        ]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        pagingEnabled
        keyExtractor={(item) => item.id}
        decelerationRate="fast"
        snapToInterval={w - 80}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        snapToAlignment="center"
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
      <View>
        <View style={styles.indicatorContainer}>
          {data.map((e, i) => renderIndicator(e, i))}
        </View>
      </View>
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  otherImg: {
    position: "absolute",
    // bottom: 10,
    // left: -3,
  },
  container: {
    marginTop: 20,
  },
  cardContainer: {
    backgroundColor: "#393839",
    padding: 15,
    width: w - 80,
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: "hidden",
    height: 180,
    justifyContent: "center",
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardTitle: {
    color: "#FFF",
    fontSize: 22,
    marginBottom: 30,
  },
  cardSerialTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },
  cardSerial: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  expContainer: {
    flexDirection: "row",
  },
  expContainerText: {
    color: "#FFF",
  },
  expContainerTextEnd: {
    fontWeight: "700",
    marginLeft: 30,
    color: "#fff",
  },
  itemCountry: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 12,
  },
  itemCountryTitle: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "500",
  },
  icon: {
    width: 50,
    height: 35,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: "#e4dfe6",
    borderRadius: 10,
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 20,
  },
});
