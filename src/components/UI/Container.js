import {View,SafeAreaView} from "react-native";
import { COLORS, PADDINGS } from "../../constants";

const Container = (props) => {

  return (
    <SafeAreaView
      style={{ backgroundColor: COLORS.black, flex: 1, }}
    >
      {props.children}
    </SafeAreaView>
  );
};

export default Container;
