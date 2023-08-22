import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { COLORS, PADDINGS, MARGINS, ROUTES } from "../../constants";
import DropdownData from "../../components/UI/DropdownData";
import CustomRadioButton from "../../components/UI/CustomRadioButton";
import { useDispatch } from "react-redux";
import * as sendMessageActions from "../../store/actions/sendMessage";
import LoadingDialog from "../../components/UI/LoadingDialog";
import { getData } from "../../utils/SessionManager";
import AppConstants from "../../utils/AppConstants";
import ButtonGroup from "../../components/UI/ButtonGroup";
import SendMessageHistory from "./SendMessageHistory";

const SendMessage = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const [teacherSelectedId, setTeacherSelectedId] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");
  let [showLoadingDialog, setShowLoadingDialog] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [buttonState, setButtonState] = useState(0);
  const dispatch = useDispatch();
  const { studentData } = route.params;

  useEffect(() => {
    loadTeacherDDLData();
  }, []);

  useEffect(() => {
    //get expo token
    getData(AppConstants.KEY_EXPO_TOKEN).then((value) => {
      console.log("Expo Push Token", value);
      setExpoPushToken(value);
    });
  });

  const loadTeacherDDLData = useCallback(async () => {
    try {
      await dispatch(
        sendMessageActions.getTeacherDDLList(
          studentData.classId,
          studentData.sectionId
        )
      );
    } catch (error) {}
  }, [dispatch]);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleOnPressSend = async () => {
    if (selectedOption == "option1") {
      if (text == "") {
        alert("message can't be empty.");
      } else {
        try {
          setShowLoadingDialog(true);
          await dispatch(
            sendMessageActions.postMessageToServer(
              "",
              text,
              expoPushToken,
              navigation
            )
          );
          setShowLoadingDialog(false);
        } catch (error) {}
      }
    } else {
      if (teacherSelectedId == "") {
        alert("please choose teacher.");
      } else if (text == "") {
        alert("message can't be empty.");
      } else {
        try {
          setShowLoadingDialog(true);
          await dispatch(
            sendMessageActions.postMessageToServer(
              teacherSelectedId,
              text,
              expoPushToken,
              navigation
            )
          );
          setShowLoadingDialog(false);
        } catch (error) {}
      }
    }
  };
  const handleScreenTouch = () => {
    Keyboard.dismiss();
  };

  const onItemClick = (id) => {
    console.log("TeacherID", id);
    setTeacherSelectedId(id);
  };

  const onPressButton = (item) => {
    console.log("ButtonState", item);
    setButtonState(item);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={{ marginBottom: MARGINS.m30, marginTop: MARGINS.m16 }}>
          <ButtonGroup
            buttons={["Send Message", "Message History"]}
            onItemClick={onPressButton}
            buttonActive={styles.btnActive}
            buttonInactive={styles.btnInactive}
            textActive={styles.textActive}
            textInActive={styles.textInActive}
          />
        </View>

        {buttonState === 0 ? (
          <TouchableOpacity activeOpacity={1} onPress={handleScreenTouch}>
            <View style={{paddingTop:PADDINGS.p20}}>
              <LoadingDialog
                showAlert={showLoadingDialog}
                setShowAlert={setShowLoadingDialog}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: MARGINS.m10,
                }}
              >
                <CustomRadioButton
                  label="To Admin"
                  checked={selectedOption === "option1"}
                  onPress={() => handleOptionChange("option1")}
                />
                <CustomRadioButton
                  label="To Teacher"
                  checked={selectedOption === "option2"}
                  onPress={() => handleOptionChange("option2")}
                />
              </View>

              <Text style={styles.contentText}>Choose Teacher:</Text>
              <DropdownData
                onItemClick={onItemClick}
                isToAdmin={selectedOption == "option1" ? true : false}
              />
              <Text style={styles.contentText}>Message:</Text>
              <TextInput
                style={styles.textArea}
                value={text}
                onChangeText={(newText) => setText(newText)}
                placeholder="Type your text here..."
                multiline={true}
                numberOfLines={4}
              />
              <TouchableOpacity
                onPress={handleOnPressSend}
                style={styles.button}
              >
                <Text style={{ color: COLORS.white }}>Send</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ) : (
          <SendMessageHistory />
        )}
      </View>
    </View>
  );
};

export default SendMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  contentText: {
    color: COLORS.white,
  },
  textArea: {
    width: "100%",
    height: 150,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlignVertical: "top",
    borderRadius: 8,
    backgroundColor: COLORS.white,
  },
  button: {
    backgroundColor: COLORS.bgColor,
    borderRadius: 12,
    padding: PADDINGS.p14,
    alignSelf: "center",
    alignItems: "center",
    marginTop: MARGINS.m30,
    width: 200,
  },
  title: {
    fontWeight: "bold",
    alignItems: "flex-start",
    marginTop: MARGINS.m6,
    color: COLORS.white,
  },
  btnInactive: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginHorizontal: 10,
  },
  btnActive: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: COLORS.black,
    backgroundColor: COLORS.bgColor,
    borderRadius: 12,
    marginHorizontal: 10,
  },
  textInActive: {
    color: COLORS.textColorBlue,
  },
  textActive: {
    color: COLORS.white,
  },
});
