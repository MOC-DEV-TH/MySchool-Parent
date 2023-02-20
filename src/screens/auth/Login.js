import React, { useState } from "react";
import { StyleSheet, Image, View, TextInput } from "react-native";
import UserInput from "../../components/UI/UserInput";
import CustomButton from "../../components/UI/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { COLORS, PADDINGS, ROUTES, IMGS, MARGINS } from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Icon, Pressable } from "native-base";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";

const Login = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleOnPressLogin = () => {
    dispatch(authActions.login(email, password, navigation));
  };

  return (
    <View style={styles.container}>
      <Image source={IMGS.logoWhite} style={styles.logo} />
      <UserInput
        name={"Login"}
        value={email}
        setValue={setEmail}
        setKeyboardType="text"
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
          title="Sign In"
          buttonStyle={{ width: 50, alignSelf: "center" }}
          textStyle={{ fontSize: 14 }}
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
    marginLeft: MARGINS.m30,
    marginRight: MARGINS.m30,
    marginTop: MARGINS.m20,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    paddingLeft: PADDINGS.p10,
    paddingTop: PADDINGS.p2,
    borderRadius: 12,
  },
});
