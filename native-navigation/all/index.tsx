import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CategoryScreens from "./sreens/category-screens";
import MealsOverviewScreen from "./sreens/meals-overview-screen";
import MealDetailScreen from "./sreens/meal-detail-screen";
import DrawerFancy from "./sreens/drawer-fancy";
import BottomNavigationCheck from "./sreens/bottom-nav";

// -------------------- TYPES --------------------
export type RootStackParamList = {
  MealsOverview: { overviewId: string };
  MealDetail: { mealId: string };
};

export type RootDrawerParamList = {
  Tabs: undefined;
  DrawerFancy: undefined;
};

export type RootBottomParamList = {
  Home: undefined;
  BottomNavigation: undefined;
};

// -------------------- NAVIGATORS --------------------
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Bottom = createBottomTabNavigator<RootBottomParamList>();

// Stack Navigator (for Home)
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#af902acc" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#5fa1a3cc" },
      }}
    >
      <Stack.Screen
        name='MealsOverview'
        component={MealsOverviewScreen}
        options={{ title: "Meals Overview" }}
      />
      <Stack.Screen
        name='MealDetail'
        component={MealDetailScreen}
        options={{ title: "Meal Detail" }}
      />
    </Stack.Navigator>
  );
};

// Bottom Tab Navigator (inside Drawer)
const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name='Home'
        component={CategoryScreens} // ✅ categories as the first page
      />
      <Bottom.Screen
        name='Meals'
        component={StackNavigator} // ✅ stack for meals
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name='BottomNavigation'
        component={BottomNavigationCheck}
      />
    </Bottom.Navigator>
  );
};

// Drawer Navigator (root)
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Tabs'
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name='DrawerFancy' component={DrawerFancy} />
    </Drawer.Navigator>
  );
};

// -------------------- APP ROOT --------------------
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
});
