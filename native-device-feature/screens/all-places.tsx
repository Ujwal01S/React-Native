import React from "react";
import PlacesList from "../components/places/places-list";
import { Button, View } from "react-native";
import * as Notifications from "expo-notifications";

const AllPlaces = () => {
  async function scheduleNotificaitonHandler() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "My first Local notification",
        body: "This is body of notification",
        data: {
          userName: "Max",
        },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 5,
        repeats: false, // optional
      },
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 100 }}>
        <PlacesList places={[]} />
      </View>

      <View>
        <Button
          title='Schedule Notification'
          onPress={scheduleNotificaitonHandler}
        />
      </View>
    </View>
  );
};

export default AllPlaces;
