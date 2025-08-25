import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/meal-item";

// Define your navigation stack's route parameters
type RootStackParamList = {
  MealsOverview: undefined; // undefined means no params expected
  // Add other screens here as needed
  // SomeOtherScreen: { userId: string };
};

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "MealsOverview">;
  route: {
    params: Record<string, string>;
  };
}

const MealsOverviewScreen = ({ navigation, route }: Props) => {
  // console.log({ params: route.params.overviewId });

  const mealId = route.params.overviewId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(Number(mealId) >= 0);
  });

  function renderItemHandler({
    item,
  }: {
    item: { id: number; title: string };
  }) {
    return <MealItem title={item.title} />;
  }

  return (
    <View style={styles.container}>
      <Text>This is Meals Overview Page {mealId} </Text>

      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderItemHandler}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
