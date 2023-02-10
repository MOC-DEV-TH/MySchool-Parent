import React, { useState } from "react";
import { StyleSheet, Image, View, TextInput } from "react-native";
import UserInput from "../../components/UserInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { COLORS, PADDINGS, ROUTES, IMGS, MARGINS } from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Icon, Pressable } from "native-base";

const Login = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleOnPressLogin = () => {
    navigation.replace(ROUTES.HOME);
  };
   
  return (
    <View style={styles.container}>
      <Image source={IMGS.logoWhite} style={styles.logo} />
      <UserInput
        name={"Login"}
        value={email}
        setValue={setEmail}
        setKeyboardType="numeric"
        placeHolder={"Email"}
      />

      <View style={styles.PasswordSectionStyle}>
        <TextInput
          style={{
            alignSelf: "flex-start",
            textAlign: "left",
            height: 40,
          }}
          placeholder={"password"}
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={showPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Icon
            style={{ color: COLORS.black }}
            as={
              <MaterialIcons
                name={showPassword ? "visibility" : "visibility-off"}
                size={24}
                color="black"
              />
            }
            mr={3}
          ></Icon>
        </Pressable>
      </View>

      <View style={{ width: 200, alignSelf: "center" }}>
        <CustomButton
          title="Sign in"
          buttonStyle={{ width: 50, alignSelf: "center" }}
          textStyle={{ fontSize: 20 }}
          buttonColor={COLORS.black}
          onPress={() => handleOnPressLogin()}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.bgColor,
    paddingLeft: PADDINGS.p20,
    paddingRight: PADDINGS.p20,
  },
  logo: {
    alignSelf: "center",
    marginBottom: 50,
  },
  PasswordSectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
    height: 48,
    marginLeft: MARGINS.m10,
    marginRight: MARGINS.m10,
    marginTop: MARGINS.m20,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    paddingLeft: PADDINGS.p10,
    borderRadius: 12,
  },
});
