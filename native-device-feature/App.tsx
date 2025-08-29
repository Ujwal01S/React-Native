import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import AllPlaces from "./screens/all-places";
import AddPlace from "./screens/add-place";
import IconButton from "./components/ui/Icon-button";
import { Colors } from "./constants/colors";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

type RootParamList = {
  AllPlaces: undefined;
  AddPlace: undefined;
};

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowBanner: true, // 👈 required
      shouldShowList: true, // 👈 required
    };
  },
});

const Stack = createStackNavigator<RootParamList>();

export default function App() {
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
      }
    );

    // react to user tapping on notification

    const recieveSubscription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("NOtification response recieved", response);
      });

    return () => {
      subscription.remove();
      recieveSubscription.remove();
    };
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
          }}
        >
          <Stack.Screen
            name='AllPlaces'
            component={AllPlaces}
            options={({ navigation }) => ({
              headerRight: ({ tintColor }) => (
                <IconButton
                  color={tintColor as string}
                  icon='add'
                  size={24}
                  onPress={() => {
                    navigation.navigate("AddPlace");
                  }}
                />
              ),
              headerTitle: "Your Favorite Places",
            })}
          />
          <Stack.Screen name='AddPlace' component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
