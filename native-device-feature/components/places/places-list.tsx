import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { PlaceType } from "../../models/place";
import PlaceItem from "./place-item";

const PlacesList = ({ places }: { places: PlaceType[] }) => {
  if (places.length === 0 || !places) {
    return (
      <View style={styles.fallbackComponent}>
        <Text style={styles.fallbackText}>No Place Added yet!!!</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(place) => place.id}
      renderItem={({ item }) => <PlaceItem item={item} onSelect={() => {}} />}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  fallbackComponent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
