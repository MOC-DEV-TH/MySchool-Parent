import { View, TouchableOpacity, Image, Text } from "react-native";
import { RightArrowSvg } from "../../assets";
import { COLORS, IMGS, MARGINS } from "../../constants";

const CardItem = ({ navigateName, imageName, name, navigation, routeData }) => {
  console.log("ImageName", imageName);
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
        {imageName}
        <Text style={{ fontWeight: "bold", flex: 0.4 }}>{name}</Text>
        <RightArrowSvg />
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;
