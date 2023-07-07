import { Alert, Linking, Platform, BackHandler } from "react-native";
import Constants from "expo-constants";
import { RestClientApi } from "../network/RestApiClient";

export const checkForUpdates = async () => {
  const version = Constants.manifest.version;
  console.log("Current app version:", version);

  RestClientApi.checkRequireUpdate().then((res) => {
    console.log("Minimum Require App Version", res.minimum_supported_version);
    if (version < res.minimum_supported_version) {
      Alert.alert(
        "Update Required",
        "A new version of the app is available. Please update to continue using the app.",
        [
          {
            text: "Update",
            onPress: () => {
              Platform.OS === "android"
                ? Linking.openURL(
                    "http://play.google.com/store/apps/details?id=com.moc.myschoolParent"
                  )
                : Linking.openURL(
                    "https://apps.apple.com/us/app/myschool-international/id6448501458"
                  ),
                BackHandler.exitApp();
            },
          },
        ],
        { cancelable: false }
      );
    }
  });
};
