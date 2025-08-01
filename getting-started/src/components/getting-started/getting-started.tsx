import { Button, StyleSheet, Text, View } from 'react-native';

export default function GettingStarted() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello Word!</Text>

      <Text
        style={{
          backgroundColor: 'blue',
          fontSize: 12,
          color: 'white',
          marginVertical: 12,
          padding: 4,
        }}
      >
        Another Piece of art
      </Text>
      <View>
        <Button title='Tap me!' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    color: 'white',
    backgroundColor: 'pink',
    padding: 12,
    borderRadius: 6,
  },
});
