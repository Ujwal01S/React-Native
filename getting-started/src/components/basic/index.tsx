import { useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Basic() {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  const [addedGoals, setAddedGoals] = useState<{ text: string; id: number }[]>(
    []
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setAddedGoals((prev) => [
      ...prev,
      { text: enteredGoalText, id: Math.random() },
    ]);
    setEnteredGoalText('');
  };

  const deleteGoalHandler = (id: any) => {
    console.log('Delete', id);
    const filteredGoal = addedGoals.filter((item) => item.id !== id);
    setAddedGoals(filteredGoal);
  };

  const handleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        {/* This view mimics the status bar background */}
        <View
          style={{
            height: Platform.OS === 'android' ? 44 : 44,
            backgroundColor: 'red',
          }}
        />

        {/* Actual status bar control */}
        <StatusBar style='light' translucent backgroundColor='white' />

        {/* Rest of your screen */}
      </View>
      <View style={{ backgroundColor: 'green', height: '100%' }}>
        <Modal visible={isModalOpen} animationType='slide'>
          <View style={{ backgroundColor: 'grey', height: '100%' }}>
            <Pressable>
              <Button title='X' onPress={() => setIsModalOpen(false)} />
              <Text>The Modal is opened</Text>
              <Image source={require('./assets/images/OIP.jpg')} />
            </Pressable>
          </View>
        </Modal>

        <View style={styles.appContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Your course goal!'
              onChangeText={goalInputHandler}
              value={enteredGoalText}
            />
            <Button title='Add Goal' onPress={addGoalHandler} />
          </View>

          <Pressable>
            <Button onPress={handleModal} title='Open' color={'purple'} />
          </Pressable>
          <View style={styles.quarter}>
            <Text>List of Goals...</Text>
            <FlatList
              data={addedGoals}
              renderItem={(goalItem) => {
                return (
                  <Pressable
                    android_ripple={{ color: '#105a77ff' }}
                    onPress={() => deleteGoalHandler(goalItem.item.id)}
                    style={({ pressed }) => pressed && styles.pressedItem}
                  >
                    <View style={styles.goals}>
                      <Text style={{ color: 'white' }}>
                        {goalItem.item.text}
                      </Text>
                    </View>
                  </Pressable>
                );
              }}
              style={{ marginTop: 10 }}
              keyExtractor={(item, index) => {
                return item.id.toString();
              }}
            />
          </View>
        </View>

        {/* <FlexBoxDeepDive /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 40,
    paddingHorizontal: 30,
    // height: '70%',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    width: '70%',
    borderColor: '#cccccc',
    marginRight: 8,
    height: 60,
  },
  quarter: {
    flex: 4,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  goals: {
    padding: 8,
    width: '100%',
    backgroundColor: '#69a1bbff',
    borderRadius: 10,
    marginVertical: 8,
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
