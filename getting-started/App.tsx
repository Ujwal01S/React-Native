import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import StartGameScreen from './src/screens/startGameScreen';
import { useState } from 'react';
import GameScreen from './src/screens/gameScreen';

export default function App() {
  const [numberPressed, setNumberPressed] = useState<string>('');
  function handlePressedNumber(value: string) {
    setNumberPressed(value);
  }

  const screen = numberPressed ? (
    <GameScreen />
  ) : (
    <StartGameScreen onPressedNumber={handlePressedNumber} />
  );
  return (
    <View style={styles.contaier}>
      <ImageBackground
        source={require('./assets/images/dice.jpg')}
        resizeMode='cover'
        style={styles.contaier}
        imageStyle={styles.imageBackgroun}
      >
        <SafeAreaView style={{ flex: 1 }}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

//ImageBackground is combination of other components and style is style for view and imageStyle is style for image

const styles = StyleSheet.create({
  contaier: {
    backgroundColor: '#c8852dff',
    flex: 1,
  },

  imageBackgroun: {
    opacity: 0.15,
  },
});
