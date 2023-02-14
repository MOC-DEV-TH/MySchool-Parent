import { StyleSheet, Image } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { COLORS, MARGINS } from "../constants";

const CustomDrawerItem = ({ iconName, label, onPressItem }) => {
  return (
    <DrawerItem
      icon={() => <Image source={iconName} />}
      labelStyle={{ marginLeft: -20, color: COLORS.white,fontWeight:"bold" }}
      style={{ backgroundColor: COLORS.bgColor ,marginBottom:MARGINS.m10,borderRadius:12}}
      label={label}
      onPress={onPressItem}
    />
  );
};

export default CustomDrawerItem;

const styles = StyleSheet.create({});
