import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="categories" component={CategoriesScreen} />
    </Drawer.Navigator>
  );
}

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          title: "Meal Categories",
        }}
      />
      <Stack.Screen
        name="MealsOverview"
        component={MealsOverviewScreen}
        //! bunlar yontem de alternatifdir
        // options={({ route, navigation }) => {
        //   const categoryId = route.params.categoryId;
        //   return{
        //     title: categoryId
        //   }
        // }}
      />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}
