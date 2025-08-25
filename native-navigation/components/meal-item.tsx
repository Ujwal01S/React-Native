import React from "react";
import { Text, View } from "react-native";

interface Props {
  title: string;
}

const MealItem = ({ title }: Props) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MealItem;
