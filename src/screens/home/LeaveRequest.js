import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS, PADDINGS, MARGINS } from "../../constants";
import Text from "@kaloraat/react-native-text";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const LeaveRequest = () => {
  const UserInput = ({
    value,
    setValue,
    setKeyboardType = "default",
    placeHolder,
    inputStyle,
    editable = true,
  }) => {
    return (
      <TextInput
        style={inputStyle}
        keyboardType={setKeyboardType}
        onChangeText={setValue}
        value={value}
        placeholder={placeHolder}
        placeholderTextColor={COLORS.black}
        multiline={placeHolder == "Description" ? true : false}
        editable={editable}
      />
    );
  };

  const [isFromDatePickerVisible, setFromDatePickerVisibility] =
    useState(false);
  const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const showToDatePicker = () => {
    setToDatePickerVisibility(true);
  };

  const hideToDatePicker = () => {
    setToDatePickerVisibility(false);
  };

  const showFromDatePicker = () => {
    setFromDatePickerVisibility(true);
  };

  const hideFromDatePicker = () => {
    setFromDatePickerVisibility(false);
  };

  const handleConfirmFromDate = (date) => {
    hideFromDatePicker();
    setFromDate(moment(date).format("YYYY-MM-DD").toString());
  };
  const handleConfirmToDate = (date) => {
    hideToDatePicker();
    setToDate(moment(date).format("YYYY-MM-DD").toString());
  };

  return (
    <View style={styles.container}>
      <Text medium color={COLORS.white} style={styles.title}>
        Exam Results
      </Text>
      <Text large color={COLORS.white} style={styles.name}>
        MG MG
      </Text>
      <Text small color={COLORS.white} style={styles.small_text}>
        Class - Grade 8 A
      </Text>
      <UserInput
        inputStyle={{
          height: 46,
          borderWidth: 1,
          backgroundColor: COLORS.white,
          paddingLeft: PADDINGS.p10,
          borderRadius: 12,
          marginBottom: MARGINS.m18,
          marginTop: MARGINS.m30,
        }}
        placeHolder={"Title"}
      />
      <UserInput
        inputStyle={{
          height: 100,
          borderWidth: 1,
          backgroundColor: COLORS.white,
          paddingLeft: PADDINGS.p10,
          borderRadius: 12,
          textAlignVertical: "top",
          paddingTop: PADDINGS.p10,
        }}
        placeHolder={"Description"}
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={showFromDatePicker} style={{ flex: 1 }}>
          <UserInput
            inputStyle={{
              height: 46,
              borderWidth: 1,
              backgroundColor: COLORS.white,
              paddingLeft: PADDINGS.p10,
              borderRadius: 12,
              marginBottom: MARGINS.m18,
              marginTop: MARGINS.m20,
              color: COLORS.black,
              marginRight: MARGINS.m4,
            }}
            placeHolder={"From Date"}
            editable={false}
            value={fromDate}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={showToDatePicker} style={{ flex: 1 }}>
          <UserInput
            inputStyle={{
              height: 46,
              borderWidth: 1,
              backgroundColor: COLORS.white,
              paddingLeft: PADDINGS.p10,
              borderRadius: 12,
              marginBottom: MARGINS.m18,
              marginTop: MARGINS.m20,
              flex: 1,
              color: COLORS.black,
              marginLeft: MARGINS.m4,
            }}
            placeHolder={"To Date"}
            editable={false}
            value={toDate}
          />
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isFromDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmFromDate}
        onCancel={hideFromDatePicker}
        display={Platform.OS === "ios" ? "inline" : "default"}
      />
      <DateTimePickerModal
        isVisible={isToDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmToDate}
        onCancel={hideToDatePicker}
        display={Platform.OS === "ios" ? "inline" : "default"}
      />

      <TouchableOpacity style={styles.button}>
        <Text normal color={COLORS.white}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LeaveRequest;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  title: {
    fontWeight: "bold",
    alignItems: "flex-start",
    marginTop: MARGINS.m6,
    marginBottom: MARGINS.m16,
  },
  small_text: {
    alignItems: "flex-start",
    marginTop: MARGINS.m2,
  },
  medium_text: {
    alignItems: "flex-start",
    marginTop: MARGINS.m18,
    marginBottom: MARGINS.m4,
  },
  name: {
    fontWeight: "bold",
    alignItems: "flex-start",
    marginTop: MARGINS.m2,
  },
  button: {
    backgroundColor: COLORS.bgColor,
    borderRadius: 12,
    padding: PADDINGS.p14,
    alignSelf: "center",
    alignItems: "center",
    marginTop: MARGINS.m22,
    width: 150,
  },
});
