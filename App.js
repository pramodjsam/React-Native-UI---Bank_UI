import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/Navigation/TabNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
