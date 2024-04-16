import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./Navigator";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
