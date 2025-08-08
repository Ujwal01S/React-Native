import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/primaryButton';

function generateRandomBetween(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({
  userNumber,
  onGameOver,
}: {
  userNumber: number;
  onGameOver: () => void;
}) => {
  let min = 1;
  let max = 100;
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<string | number>(
    initialGuess
  );

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction: string) {
    if (
      (direction === 'lower' && (currentGuess as number) < userNumber) ||
      (direction === 'greater' && (currentGuess as number) > userNumber)
    ) {
      Alert.alert('No lie!', 'You know this is wrong', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      max = currentGuess as number;
    } else {
      min = (currentGuess as number) + 1;
    }
    const newRandomNumber = generateRandomBetween(
      min,
      max as number,
      currentGuess as number
    );
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opponent's Guess</Text>

      <Text style={styles.currentGuess}>{currentGuess}</Text>

      <View>
        <Text style={styles.fontCheck}>Higher or Lower?</Text>
      </View>

      <View>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name='remove' size={24} color={'white'} />
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
          <Ionicons name='add' size={24} color={'white'} />
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 20,
  },

  title: {
    fontSize: 24,
    color: '#258ab3ff',
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#b62323ff',
  },

  currentGuess: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 28,
    color: 'white',
    padding: 30,
    marginTop: 10,

    borderWidth: 1,
    borderColor: '#7d0dbeff',
  },
  fontCheck: {
    fontFamily: 'open-sans-bold',
  },
});
