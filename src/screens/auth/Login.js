import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import UserInput from "../../components/UserInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../constants";

const Login = (props) => {
  const navigation = useNavigation();
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");

  const handleOnPressLogin = () => {
    navigation.replace(ROUTES.HOME);
  };

  return (
    <View style={styles.container}>
      <UserInput
        name={"Login"}
        value={phoneNo}
        setValue={setPhoneNo}
        setKeyboardType="numeric"
      />
      <UserInput name={"Password"} value={password} setValue={setPassword} />
      <CustomButton
        title="LOGIN"
        buttonStyle={{ width: "90%", alignSelf: "center" }}
        textStyle={{ fontSize: 20 }}
        onPress={() => handleOnPressLogin()}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
