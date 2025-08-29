import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
  ImagePickerResult,
  ImagePickerSuccessResult,
} from "expo-image-picker";
import React, { useState } from "react";
import { Alert, Button, Image, Text, View } from "react-native";
import OutlinedButton from "../ui/outlined-button";
import { Colors } from "../../constants/colors";

const ImagePicker = () => {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const [pickedImage, setPickedImage] = useState<string | null>(null);

  async function verifyPermission() {
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission!",
        "You need to grant camera permissions to use this app"
      );
      return false;
    }

    return true;
  }

  const takeImageHandler = async () => {
    const hasPermissions = await verifyPermission();
    if (!hasPermissions) return;

    const result: ImagePickerResult = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (!result.canceled) {
      const successResult = result as ImagePickerSuccessResult;
      setPickedImage(successResult.assets[0].uri);
    }
  };

  return (
    <View>
      <View>
        {pickedImage && (
          <Image
            source={{ uri: pickedImage }}
            style={{ width: 200, height: 200 }}
          />
        )}
      </View>
      {!pickedImage && (
        <View
          style={{
            height: 200,
            width: "100%",
            borderWidth: 1,
            borderColor: Colors.gray700,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>No Image Taken Yet!</Text>
        </View>
      )}
      <View>
        <OutlinedButton icon='camera' onPress={takeImageHandler}>
          Take Image
        </OutlinedButton>
      </View>
    </View>
  );
};

export default ImagePicker;

// AIzaSyD_KkSedSqjB2WibjOrcN5b_GfvGHwWxrw
