import { View, TouchableOpacity, Image, Text } from "react-native";
import { COLORS, IMGS, MARGINS } from "../../constants";
import SvgUri from "react-native-svg-uri";

const CardItem = ({ navigateName, imageName, name, navigation, routeData }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(navigateName, { studentData: routeData })
      }
    >
      <View
        style={{
          height: 80,
          backgroundColor: COLORS.white,
          borderRadius: 12,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: MARGINS.m26,
        }}
      >
        <SvgUri width="30" height="30" source={imageName} />
        <Text style={{ fontWeight: "bold", flex: 0.4 }}>{name}</Text>
        <Image source={IMGS.arrowBlue} />
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;
