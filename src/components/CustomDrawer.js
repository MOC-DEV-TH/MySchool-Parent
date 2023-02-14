import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Text from "@kaloraat/react-native-text";
import { COLORS, IMGS, MARGINS, PADDINGS, ROUTES } from "../constants";
import Icon from "react-native-vector-icons/Ionicons";
import CustomDrawerItem from "./CustomDrawerItem";
import { useNavigation } from "@react-navigation/native";

const { screenWidth } = Dimensions.get("screen");

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  const [children, setChildren] = useState([
    {
      id: 1,
      title: "Getting Started",
      body: "React native Accordion/Collapse component, very good to use in toggles & show/hide content",
    },
    {
      id: 2,
      title: "Components",
      body: "AccordionList,Collapse,CollapseHeader & CollapseBody",
    },
  ]);
  const [expanded, setExpanded] = useState(false);

  const renderChildrenItem = () => {
    return (
      <TouchableOpacity>
        <View style={styles.childrenItem}>
          <Text
            small
            color={COLORS.textColorBlue}
            style={{ fontWeight: "bold", paddingLeft: PADDINGS.p10 }}
          >
            Aung Aung
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleOnPressMyProfile = () => {
    navigation.navigate(ROUTES.PROFILE);
  };
  const handleOnPressCalendar = () => {
    navigation.navigate(ROUTES.CALENDAR_EVENT);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: COLORS.bgColor }}
      >
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
          <CustomDrawerItem
            iconName={IMGS.profile}
            label={"My Profile"}
            onPressItem={handleOnPressMyProfile}
          />

          <DrawerItem
            icon={() => <Image source={IMGS.children} />}
            style={{
              backgroundColor: COLORS.bgColor,
              marginBottom: expanded ? undefined : MARGINS.m10,
              borderRadius:12
            }}
            label={() => (
              <View
                style={{
                  marginLeft: -20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
                  Children
                </Text>
                <Icon name="chevron-down" size={18} color={COLORS.white} />
              </View>
            )}
            onPress={() => {
              setExpanded(!expanded);
            }}
          />
          {expanded ? (
            <FlatList
              data={children}
              style={{
                marginTop: MARGINS.m4,
                marginRight: MARGINS.m10,
                marginLeft: MARGINS.m10,
              }}
              showsVerticalScrollIndicator={false}
              renderItem={renderChildrenItem}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : undefined}

          <CustomDrawerItem
            iconName={IMGS.event_schedule}
            label={"Calendar"}
            onPressItem={handleOnPressCalendar}
          />

          <CustomDrawerItem
            iconName={IMGS.billing}
            label={"Billing"}
            onPressItem={handleOnPressMyProfile}
          />

          <CustomDrawerItem
            iconName={IMGS.about}
            label={"About MySchool"}
            onPressItem={handleOnPressMyProfile}
          />
          <CustomDrawerItem
            iconName={IMGS.termAndCondition}
            label={"Terms and Conditions"}
            onPressItem={handleOnPressMyProfile}
          />
          <CustomDrawerItem
            iconName={IMGS.privacyPolicy}
            label={"Privacy Policy"}
            onPressItem={handleOnPressMyProfile}
          />
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
    backgroundColor: COLORS.white,
    paddingTop: MARGINS.m10,
  },
  footerView: {
    padding: PADDINGS.p16,
  },
  childrenItem: {
    borderRadius: 6,
    backgroundColor: COLORS.grayLight,
    marginBottom: MARGINS.m6,
    alignItems: "flex-start",
    padding: PADDINGS.p4,
  },
});
