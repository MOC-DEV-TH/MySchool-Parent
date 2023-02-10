import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import { ROUTES } from "../constants";
import { COLORS } from "../constants";
import { TermsAndConditions, AboutMySchool, PrivacyPolicy } from "../screens";
import { Home } from "../screens";
import HomeNavigator from "./HomeNavigator";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {},
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

      <Drawer.Screen name={ROUTES.PRIVACY_POLICY} component={PrivacyPolicy} />
      <Drawer.Screen
        name={ROUTES.TERMS_AND_CONDITIONS}
        component={TermsAndConditions}
      />
      <Drawer.Screen name={ROUTES.ABOUT_MY_SCHOOL} component={AboutMySchool} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
