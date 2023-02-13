import { View, TouchableOpacity, Image,Text } from "react-native";
import { COLORS, IMGS, MARGINS } from "../constants";
import { useNavigation } from "@react-navigation/native";
const CardItem = ({ navigateName, imageName, name }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateName)}>
      <View
        style={{
          height: 80,
          backgroundColor: COLORS.white,
          borderRadius: 12,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: MARGINS.m18,
        }}
      >
        <Image source={imageName} />
        <Text style={{ fontWeight: "bold",flex:0.4}}>{name}</Text>
        <Image source={IMGS.arrowBlue} />
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;
