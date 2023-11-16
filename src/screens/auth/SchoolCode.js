import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, TextInput, BackHandler } from "react-native";
import UserInput from "../../components/UI/UserInput";
import CustomButton from "../../components/UI/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { COLORS, PADDINGS, IMGS, MARGINS, ROUTES } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import * as baseUrlAction from "../../store/actions/schoolCode";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StatusBar } from "expo-status-bar";
import { setData } from "../../utils/SessionManager";
import AppConstants from "../../utils/AppConstants";
import LoadingDialog from "../../components/UI/LoadingDialog";
import { LogoWhiteBigSvg, LogoWhiteSvg } from "../../assets";

const SchoolCode = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [code, setCode] = useState("");
  let [showLoadingDialog, setShowLoadingDialog] = useState(false);

  //on back press
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  // ** OLD Press Function
  // const handleOnPressNext = async () => {
  //   const found = schoolCodeData.find((obj) => {
  //     return obj.code === code;
  //   });
  //   console.log("SchoolCodeUrl", found);
  //   if (code == "") {
  //     alert("school code can't be empty.");
  //   } else if (found == undefined) {
  //     alert("invalid school code!");
  //   } else {
  //     setData(AppConstants.KEY_BASE_URL, found.api_url);
  //     dispatch(baseUrlAction.setBaseUrl(found.api_url, navigation));
  //   }
  // };
  // const schoolCodeData = [
  //   {
  //     code: "UAT001",
  //     api_url: "http://uat.myschool.fyi",
  //   },
  //   {
  //     code: "YKSPS",
  //     api_url: "https://yksps.myschool.fyi",
  //   },
  //   {
  //     code: "PROD001",
  //     api_url: "https://myschool.myanmaronlinecreations.com",
  //   },
  // ];

  const handleOnPressNext = async () => {
    if (code == "") {
      alert("school code can't be empty.");
    } else {
      try {
        setShowLoadingDialog(true);
        await dispatch(baseUrlAction.getSchoolCodeUrl(code, navigation));
        setShowLoadingDialog(false);
      } catch (error) {}
    }
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <View style={styles.container}>
        <LoadingDialog
          showAlert={showLoadingDialog}
          setShowAlert={setShowLoadingDialog}
        />
        <StatusBar style="light" />
        <LogoWhiteBigSvg style={styles.logo} />
        <UserInput
          name={"Enter Code"}
          value={code}
          setValue={setCode}
          placeHolder={"Enter School Code"}
        />
        <View style={{ width: 200, alignSelf: "center" }}>
          <CustomButton
            title="Next"
            buttonStyle={{ width: 50, alignSelf: "center" }}
            textStyle={{ fontSize: 14 }}
            buttonColor={COLORS.black}
            onPress={() => handleOnPressNext()}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SchoolCode;

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
