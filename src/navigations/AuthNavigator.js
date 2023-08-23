import { createStackNavigator } from "@react-navigation/stack";
import { Login, StartUpScreen } from "../screens";
import { ROUTES, COLORS } from "../constants";
import DrawerNavigator from "./DrawerNavigator";
import SchoolCode from "../screens/auth/SchoolCode";
import { TransitionPresets } from "@react-navigation/stack";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
     initialRouteName={ROUTES.SCHOOL_CODE}>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.START_UP}
        component={StartUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.SCHOOL_CODE}
        component={SchoolCode}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
