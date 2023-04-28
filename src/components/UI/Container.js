import {View,SafeAreaView} from "react-native";
import { COLORS, PADDINGS } from "../../constants";

const Container = (props) => {

  return (
    <View
      style={{ backgroundColor: COLORS.black, flex: 1, }}
    >
      {props.children}
    </View>
  );
};

export default Container;
