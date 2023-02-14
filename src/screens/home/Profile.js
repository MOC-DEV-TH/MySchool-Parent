import { StyleSheet, ImageBackground, View, Image } from "react-native";
import React from "react";
import { IMGS, COLORS, PADDINGS, MARGINS } from "../../constants";
import CustomText from "../../components/CustomText";
import Text from "@kaloraat/react-native-text";
import CustomTextWithIcon from "../../components/CustomTextWithIcon";

const Profile = () => {
  const handleOnPressResidentialAddress = () => {
    console.log("OnPress Address");
  };
  const handleOnPressPhone = () => {
    console.log("OnPress Phone");
  };
  const handleOnPressEmail = () => {
    console.log("OnPress Email");
  };

  return (
    <View style={styles.container}>
      {/* <View style={{ alignItems: "center" }}>
        <ImageBackground source={IMGS.circle_blue} style={styles.imageBg}>
          <View>
            <Image source={IMGS.user_white} />
          </View>
        </ImageBackground>
      </View> */}

      <CustomText label={"Name"} name={"Daw Mya Mya"} />
      <CustomText label={"NRC No."} name={"12/xxx(N)xxx"} />

      <Text
        medium
        color={COLORS.white}
        style={{ marginBottom: MARGINS.m16, marginTop: MARGINS.m8 }}
      >
        Contact Details
      </Text>

      <View style={styles.footerContainer}>
        <CustomTextWithIcon
          iconName={"mail"}
          text={"Email Address"}
          onPressItem={handleOnPressEmail}
        />
        <CustomTextWithIcon
          iconName={"call"}
          text={"Phone Number"}
          onPressItem={handleOnPressPhone}
        />
        <CustomTextWithIcon
          iconName={"locate"}
          divider={false}
          text={"Residential"}
          onPressItem={handleOnPressResidentialAddress}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
    paddingTop:PADDINGS.p38
  },
  imageBg: {
    alignItems: "center",
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: MARGINS.m24,
    marginBottom: MARGINS.m32,
  },
  footerContainer: {
    borderRadius: 12,
    backgroundColor: COLORS.white,
    padding: PADDINGS.p10,
  },
});
