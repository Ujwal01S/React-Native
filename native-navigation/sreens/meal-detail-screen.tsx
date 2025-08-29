import { RouteProp } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RootStackParamList } from "../App";
import { MEALS } from "../data/dummy-data";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const MealDetailScreen = ({
  route,
  navigation,
}: {
  route: RouteProp<RootStackParamList, "MealDetail">;
  navigation: NativeStackNavigationProp<RootStackParamList, "MealDetail">;
}) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("Pressed@!!!!!!!!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title='Favriout' onPress={headerButtonPressHandler} />;
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={{ uri: selectedMeal?.imageUrl }}
          style={{ width: 400, height: 400 }}
        />
        <Text style={{ padding: 4, fontWeight: "bold", textAlign: "center" }}>
          {selectedMeal?.title}
        </Text>

        <View>
          <Text style={styles.listHeader}>Ingredients:</Text>

          {selectedMeal?.ingredients.map((item: string) => (
            <Text key={item}>{item}</Text>
          ))}

          <Text style={styles.listHeader}>Steps:</Text>
          {selectedMeal?.steps.map((item: string) => (
            <Text key={item}>{item}</Text>
          ))}
          <View style={styles.details}>
            <Text style={styles.detailItem}>{selectedMeal?.duration} </Text>
            <Text style={styles.detailItem}> {selectedMeal?.complexity} </Text>
            <Text style={styles.detailItem}>
              {" "}
              {selectedMeal?.affordability}{" "}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },

  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    alignItems: "center",
  },

  listHeader: {
    fontWeight: "semibold",
  },

  container: {
    padding: 16,
    gap: 8,
    flex: 1,
  },
});
