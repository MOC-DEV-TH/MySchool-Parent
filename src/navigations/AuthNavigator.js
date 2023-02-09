import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens";
import { ROUTES, COLORS } from "../constants";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={({ route }) => ({
          headerTintColor: COLORS.white,
          headerBackTitle: "Back",
          headerBackTitleVisible: false,
          headerShown: true,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        })}
      />
      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
