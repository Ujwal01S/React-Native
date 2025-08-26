import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface ItemProps {
  title: string;
  imageUrl: string;
  duration: string;
  complexity: string;
  affordability: string;
  id: string;
}

type MealItemNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MealDetail"
>;

const MealItem = ({
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
  id,
}: ItemProps) => {
  const navigation = useNavigation<MealItemNavigationProp>();

  const handleNavigation = () => {
    navigation.navigate("MealDetail", { mealId: id });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={handleNavigation}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.text}>{title}</Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration} </Text>
          <Text style={styles.detailItem}> {complexity} </Text>
          <Text style={styles.detailItem}> {affordability} </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 500,
    borderRadius: 8,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
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
});
