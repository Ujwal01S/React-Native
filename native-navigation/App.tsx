import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoryScreens from "./sreens/category-screens";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./sreens/meals-overview-screen";
import MealDetailScreen from "./sreens/meal-detail-screen";

export type RootStackParamList = {
  Categories: undefined;
  MealsOverview: { overviewId: string };
  MealDetail: { mealId: string };
};

// ✅ provide generics to the stack
const Stack = createNativeStackNavigator<RootStackParamList>();

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
            name='Categories'
            component={CategoryScreens}
            options={{
              title: "All Categories",
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
