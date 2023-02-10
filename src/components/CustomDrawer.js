import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Text from "@kaloraat/react-native-text";
import { COLORS, IMGS, MARGINS, PADDINGS } from "../constants";

const { width } = Dimensions.get("screen");

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}
      contentContainerStyle={{backgroundColor:COLORS.bgColor}}>
        <ImageBackground source={IMGS.bgPattern} style={{ height: 140 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Image source={IMGS.appIcon} style={styles.userImg} />
            <Text style={styles.title}>
              Welcome,<Text>Name</Text>
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.drawerListWrapper}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footerView}>
        <Text small>App Version 1.0</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    left: 8,
    position: "absolute",
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  title: {
    position: "absolute",
    alignItems: "center",
    color: COLORS.white,
    paddingLeft: PADDINGS.p20,
  },
  drawerListWrapper: {
    flex: 1,
    backgroundColor:COLORS.white
  },
  footerView: {
    padding: PADDINGS.p16,
  },
});
