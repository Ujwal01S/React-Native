import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  children: React.ReactNode;
  onPress?: () => void;
}

export default function PrimaryButton({ children, onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
  },
  container: {
    backgroundColor: '#410925ff',
    padding: 8,
    margin: 8,
    borderRadius: 6,
    width: 150,
  },
});
