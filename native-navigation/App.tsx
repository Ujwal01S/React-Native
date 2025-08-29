import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoryScreens from "./sreens/category-screens";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./sreens/meals-overview-screen";
import MealDetailScreen from "./sreens/meal-detail-screen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerFancy from "./sreens/drawer-fancy";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomNavigationCheck from "./sreens/bottom-nav";
export type RootStackParamList = {
  Drawer: undefined;
  MealsOverview: { overviewId: string };
  MealDetail: { mealId: string };
};

export type RootDrawerParamList = {
  DrawerFancy: undefined;
  Categories: undefined;
};

export type RootBottomParamList = {
  Categories: undefined;
};

// ✅ provide generics to the stack
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Bottom = createBottomTabNavigator();

const ButtonNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name='Categories' component={CategoryScreens} />
      <Bottom.Screen
        name='BottomNavigation'
        component={BottomNavigationCheck}
      />
    </Bottom.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Categories'
        component={ButtonNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name='DrawerFancy' component={DrawerFancy} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#af902acc" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#5fa1a3cc" },
          }}
        >
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            // options={({
            //   route,
            // }: {
            //   route: RouteProp<RootStackParamList, "MealsOverview">;
            // }) => {
            //   const catId = route.params.overviewId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />

          <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title='In The Header' />;
            //   },
            // }}
          />
        </Stack.Navigator>
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
