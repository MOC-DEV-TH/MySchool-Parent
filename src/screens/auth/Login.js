import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  BackHandler,
  PanResponder,
} from "react-native";
import UserInput from "../../components/UI/UserInput";
import CustomButton from "../../components/UI/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { COLORS, PADDINGS, IMGS, MARGINS, ROUTES } from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Icon, Pressable } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../../store/actions/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StatusBar } from "expo-status-bar";
import LoadingDialog from "../../components/UI/LoadingDialog";

const Login = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  let [showLoadingDialog, setShowLoadingDialog] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < -50) {
          console.log("Swiped left!");
          alert("Swipe Left");
        }
      },
    })
  ).current;

  //on back press
  useEffect(() => {
    const backAction = () => {
      navigation.navigate(ROUTES.SCHOOL_CODE);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const handleOnPressLogin = async () => {
    if (email == "") {
      alert("email can't be empty.");
    } else if (password == "") {
      alert("password can't be empty.");
    } else {
      try {
        setShowLoadingDialog(true);
        await dispatch(authActions.login(email, password, navigation));
        setShowLoadingDialog(false);
      } catch (error) {}
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <LoadingDialog
        showAlert={showLoadingDialog}
        setShowAlert={setShowLoadingDialog}
      />
      <View {...panResponder.panHandlers} style={styles.container}>
        <StatusBar style="light" />
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
              flex: 1,
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
    </KeyboardAwareScrollView>
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
  loadingContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.black,
  },
});
