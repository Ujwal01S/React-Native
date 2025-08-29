import React from "react";
import { IconName } from "./Icon-button";
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

interface Props {
  onPress: () => void;
  icon: IconName;
  children: React.ReactNode;
}

const OutlinedButton = ({ icon, children, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Ionicons
        name={icon}
        color={Colors.primary500}
        style={styles.icon}
        size={20}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.primary500,
  },

  icon: {
    marginRight: 6,
  },

  text: {
    color: Colors.primary500,
  },
});
