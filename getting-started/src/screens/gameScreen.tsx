import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is game screen</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
});
