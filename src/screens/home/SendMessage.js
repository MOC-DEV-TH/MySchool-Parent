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

const SendMessage = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const [teacherSelectedId, setTeacherSelectedId] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");
  let [showLoadingDialog, setShowLoadingDialog] = useState(false);
  const dispatch = useDispatch();
  const { studentData } = route.params;

  useEffect(() => {
    loadTeacherDDLData();
  }, []);

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
            sendMessageActions.postMessageToServer("", text, navigation)
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
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handleScreenTouch}
      style={styles.container}
    >
      <View>
        <Text style={styles.title}>Send Message</Text>
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
        <TouchableOpacity onPress={handleOnPressSend} style={styles.button}>
          <Text style={{ color: COLORS.white }}>Send</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
});
