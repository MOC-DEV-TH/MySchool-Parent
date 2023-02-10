import { createStackNavigator } from "@react-navigation/stack";
import { Home, KidProfile } from "../screens";
import { ROUTES, COLORS, IMGS } from "../constants";

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={({ route }) => ({
          headerTintColor: COLORS.white,
          headerBackTitle: "Back",
          headerBackTitleVisible: false,
          headerShown: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        })}
      />
      <Stack.Screen
        name={ROUTES.KID_PROFILE}
        component={KidProfile}
        options={{
          headerShown: true,
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.bgColor,
            height: 100,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
