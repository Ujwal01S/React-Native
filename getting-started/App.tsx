import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import StartGameScreen from './src/screens/startGameScreen';
import { useState } from 'react';
import GameScreen from './src/screens/gameScreen';
import GameOverScreen from './src/screens/gameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [numberPressed, setNumberPressed] = useState<string>('');
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);

  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  function handlePressedNumber(value: string) {
    setNumberPressed(value);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = numberPressed ? (
    <GameScreen
      userNumber={Number(numberPressed)}
      onGameOver={gameOverHandler}
    />
  ) : (
    <StartGameScreen onPressedNumber={handlePressedNumber} />
  );

  if (gameIsOver && numberPressed) {
    screen = <GameOverScreen />;
  }

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
