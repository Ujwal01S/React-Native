import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  color: string;
  onPress: () => void;
}

const CategoryGridTile = ({ color, title, onPress }: Props) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#cccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? { opacity: 0.5 } : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
  },

  button: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 8,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
