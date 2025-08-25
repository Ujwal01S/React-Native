import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import PrimaryButton from '../components/primaryButton';

interface Props {
  onPressedNumber: (value: string) => void;
}
const deviceWidth = Dimensions.get('window').width;

export default function StartGameScreen({ onPressedNumber }: Props) {
  const [enteredNumber, setEnteredNumber] = useState<string | undefined>('');

  const { height, width } = useWindowDimensions();

  function handleInputChange(value: string) {
    setEnteredNumber(value);
  }

  function handleReset() {
    setEnteredNumber('');
    onPressedNumber('');
  }

  function handleConfirm() {
    // console.log('pressed');
    const value = parseInt(enteredNumber as string);

    if (isNaN(value) || value <= 0 || value > 99) {
      Alert.alert('Invalid Number', 'Number has to be between 1 and 100', [
        { text: 'Okay', style: 'destructive', onPress: handleReset },
      ]);
    }
    onPressedNumber(enteredNumber as string);
  }

  const dynamicRenderingDeviceWidth = width < 450 ? 60 : 70;
  const dynamicRenderingDeviceHeight = height < 450 ? 60 : 70;

  // below we have added dynamic width when user change orientation the width/ height of device changes and we need to re-render the with changed width/height css

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='position'>
        <View
          style={[
            styles.container,
            { marginTop: dynamicRenderingDeviceHeight < 320 ? 50 : 100 },
          ]}
        >
          <TextInput
            style={[
              styles.numberInput,
              { width: dynamicRenderingDeviceWidth < 450 ? 60 : 70 },
            ]}
            maxLength={2}
            keyboardType='number-pad'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={handleInputChange}
            value={enteredNumber}
          />
          <View style={styles.buttonBox}>
            <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
            <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    // marginTop: 100,
    marginHorizontal: 16,
    backgroundColor: '#7d1449ff',
    borderRadius: 8,

    elevation: 4, // this property is for shadow for android only

    //from here is shadow for ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    borderBottomColor: '#ddb52f',
    height: 50,
    fontSize: 20,
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    // width: deviceWidth < 450 ? 60 : 70,
  },
  buttonBox: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    justifyContent: 'space-between',
  },
});
