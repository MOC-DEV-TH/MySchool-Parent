import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import { ROUTES, COLORS, IMGS } from "../constants";
import {
  TermsAndConditions,
  AboutMySchool,
  PrivacyPolicy,
  Profile,
} from "../screens";
import HomeNavigator from "./HomeNavigator";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.bgColor,
        drawerActiveTintColor: COLORS.bgColor,
        drawerInactiveTintColor: COLORS.bgColor,
        drawerInactiveBackgroundColor: COLORS.bgColor,
        drawerLabelStyle: {
          color: COLORS.white,
          marginLeft: -20,
        },
      }}
    >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        options={{
          title: "Home",
          drawerItemStyle: { height: 0 },
        }}
        component={HomeNavigator}
      />

      {/* <Drawer.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home-sharp" size={18} color={COLORS.white} />
          ),
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      />
      <Drawer.Screen
        name={ROUTES.PRIVACY_POLICY}
        component={PrivacyPolicy}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home-sharp" size={18} color={COLORS.white} />
          ),
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      />
      <Drawer.Screen
        name={ROUTES.TERMS_AND_CONDITIONS}
        component={TermsAndConditions}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home-sharp" size={18} color={COLORS.white} />
          ),
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      />
      <Drawer.Screen
        name={ROUTES.ABOUT_MY_SCHOOL}
        component={AboutMySchool}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
          },
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home-sharp" size={18} color={COLORS.white} />
          ),
          headerTitle: () => <Image source={IMGS.logoWhiteSmall} />,
        }}
      /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
