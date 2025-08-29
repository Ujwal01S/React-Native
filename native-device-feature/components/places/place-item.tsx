import React from "react";
import { PlaceType } from "../../models/place";
import { Image, Pressable, Text, View } from "react-native";

const PlaceItem = ({
  item,
  onSelect,
}: {
  item: PlaceType;
  onSelect: () => void;
}) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: item.imageUrl }} />

      <View>
        <Text>{item.title}</Text>
        <Text>{item.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;
