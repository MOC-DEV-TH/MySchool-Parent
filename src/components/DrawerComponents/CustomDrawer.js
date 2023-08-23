import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Text from "@kaloraat/react-native-text";
import { COLORS, IMGS, MARGINS, PADDINGS, ROUTES } from "../../constants";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation, CommonActions } from "@react-navigation/native";
import CustomDrawerItem from "../DrawerComponents/CustomDrawerItem";
import { useSelector } from "react-redux";
import { useDrawerStatus } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Login } from "../../screens";
import AppConstants from "../../utils/AppConstants";
import {
  AboutSvg,
  BillingSvg,
  CalendarSvg,
  ChildSvg,
  LogoutSvg,
  PrivacySvg,
  ProfileSvg,
  TermAndConditionSvg,
} from "../../assets";

const CustomDrawer = (props) => {
  const studentData = useSelector((state) => state.home.studentData);
  const userName = useSelector((state) => state.auth.name);
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const isDrawerOpen = useDrawerStatus() === "open";

  console.log("UserName", userName);

  useEffect(() => {
    !isDrawerOpen ? setExpanded(false) : undefined;
  }, [isDrawerOpen]);

  const renderChildrenItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ROUTES.KID_PROFILE, { studentData: item })
        }
      >
        <View style={styles.childrenItem}>
          <Text
            small
            color={COLORS.textColorBlue}
            style={{ fontWeight: "bold", paddingLeft: PADDINGS.p10 }}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const handleOnPressMyProfile = () => {
    navigation.navigate(ROUTES.PROFILE);
  };
  const handleOnPressBilling = () => {
    navigation.navigate(ROUTES.BILLING);
  };
  const handleOnPressCalendar = () => {
    navigation.navigate(ROUTES.CALENDAR_EVENT);
  };

  const handleOnPressAboutMySchool = () => {
    navigation.navigate(ROUTES.ABOUT_MY_SCHOOL);
  };

  const handleOnPressTermAndCondition = () => {
    navigation.navigate(ROUTES.TERMS_AND_CONDITIONS);
  };

  const handleOnPressPrivacyPolicy = () => {
    navigation.navigate(ROUTES.PRIVACY_POLICY);
  };

  const handleOnPressLogout = () => {
    AsyncStorage.removeItem(AppConstants.KEY_USER_DATA);
    AsyncStorage.removeItem(AppConstants.KEY_AUTH_TOKEN);
    AsyncStorage.removeItem(AppConstants.KEY_BASE_URL);
    //navigation.navigate(ROUTES.LOGIN_NAVIGATOR);
    props.navigation.closeDrawer();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "School Code" }],
      })
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: COLORS.white }}
      >
        <View
          style={{
            marginLeft: MARGINS.m10,
            marginTop: MARGINS.m26,
            marginBottom: MARGINS.m26,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Welcome({userName})</Text>
        </View>

        <View
          style={{ flex: 1, height: 1, backgroundColor: COLORS.grayLight }}
        />

        <View style={styles.drawerListWrapper}>
          <CustomDrawerItem
            iconName={<ProfileSvg />}
            label={"My Profile"}
            onPressItem={handleOnPressMyProfile}
          />

          <DrawerItem
            icon={() => <ChildSvg />}
            style={{
              backgroundColor: COLORS.bgColor,
              marginBottom: expanded ? undefined : MARGINS.m10,
              borderRadius: 12,
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
              data={studentData}
              style={{
                marginTop: MARGINS.m4,
                marginRight: MARGINS.m10,
                marginLeft: MARGINS.m10,
              }}
              showsVerticalScrollIndicator={false}
              renderItem={(itemData) => renderChildrenItem(itemData.item)}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : undefined}

          <CustomDrawerItem
            iconName={<CalendarSvg />}
            label={"Calendar"}
            onPressItem={handleOnPressCalendar}
          />

          <CustomDrawerItem
            iconName={<BillingSvg />}
            label={"Billing"}
            onPressItem={handleOnPressBilling}
          />

          <CustomDrawerItem
            iconName={<AboutSvg />}
            label={"About MySchool"}
            onPressItem={handleOnPressAboutMySchool}
          />
          <CustomDrawerItem
            iconName={<TermAndConditionSvg />}
            label={"Terms and Conditions"}
            onPressItem={handleOnPressTermAndCondition}
          />
          <CustomDrawerItem
            iconName={<PrivacySvg />}
            label={"Privacy Policy"}
            onPressItem={handleOnPressPrivacyPolicy}
          />

          <CustomDrawerItem
            iconName={<LogoutSvg width={20} height={20} />}
            label={"Logout"}
            onPressItem={handleOnPressLogout}
          />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footerView}>
        <Text small>App Version 1.0.1</Text>
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
