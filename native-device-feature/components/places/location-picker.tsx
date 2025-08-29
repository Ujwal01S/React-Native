import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../ui/outlined-button";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { getMapPreview } from "../../utils/location";

const LocationPicker = () => {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const [pickedLocation, setPickedLocation] = useState<{
    lat: number | undefined;
    lng: number | undefined;
  }>({ lat: undefined, lng: undefined });

  async function verifyPermissions() {
    if (
      locationPermissionInformation?.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission!",
        "You need to grant location permissions to use this app"
      );
      return false;
    }

    return true;
  }
  async function getLocationHandler() {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) return;
    const location = await getCurrentPositionAsync();
    // console.log(location);
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

  return (
    <View>
      <View style={styles.mapPreview}>
        {pickedLocation.lat !== undefined &&
        pickedLocation.lng !== undefined ? (
          <Image
            source={{
              uri: getMapPreview({
                lat: pickedLocation.lat,
                lng: pickedLocation.lng,
              }),
            }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Text>No Location Selected Yet!</Text>
        )}
      </View>

      <View style={styles.actions}>
        <OutlinedButton icon='location' onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon='map' onPress={() => {}}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    marginVertical: 8,
    height: 200,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.gray700,
    alignItems: "center",
    justifyContent: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
