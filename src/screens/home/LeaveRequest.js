import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { COLORS, PADDINGS, MARGINS } from "../../constants";
import Text from "@kaloraat/react-native-text";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { RestClientApi } from "../../network/RestApiClient";
import { useSelector } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LeaveRequest = ({ route, navigation }) => {
  const { studentData } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [isFromDatePickerVisible, setFromDatePickerVisibility] =
    useState(false);
  const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  //get auth token
  const token = useSelector((state) => state.auth.token);
  //get auth token
  const baseUrl = useSelector((state) => state.baseURL.baseUrl);

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

  const handleOnPressSubmit = () => {
    console.log(title, description, fromDate, toDate);
    setIsLoading(true);
    RestClientApi.postLeaveRequest(
      studentData.id.toString(),
      title,
      description,
      fromDate,
      toDate,
      token,
      baseUrl
    ).then((response) => {
      if (response.description == "success") {
        setIsLoading(false);
        navigation.goBack();
      } else {
        setIsLoading(false);
        alert(response.description);
      }
    });
  };

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: COLORS.black }}>
      <View style={styles.container}>
        <Text medium color={COLORS.white} style={styles.title}>
          New Leave
        </Text>
        <Text large color={COLORS.white} style={styles.name}>
          {studentData.name}
        </Text>
        <Text small color={COLORS.white} style={styles.small_text}>
          Class - {studentData.class_name} {studentData.section}
        </Text>
        <TextInput
          style={{
            height: 46,
            borderWidth: 1,
            backgroundColor: COLORS.white,
            paddingLeft: PADDINGS.p10,
            borderRadius: 12,
            marginTop: MARGINS.m30,
          }}
          value={title}
          onChangeText={(text) => setTitle(text)}
          placeholder={"Enter Title"}
          placeholderTextColor={COLORS.black}
        />
        <TextInput
          style={{
            height: 100,
            borderWidth: 1,
            backgroundColor: COLORS.white,
            paddingLeft: PADDINGS.p10,
            borderRadius: 12,
            marginTop: MARGINS.m20,
            textAlignVertical: "top",
            paddingTop: PADDINGS.p10,
          }}
          multiline={true}
          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder={"Enter Description"}
          placeholderTextColor={COLORS.black}
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity onPress={showFromDatePicker} style={{ flex: 1 }}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={"From Date"}
                editable={false}
                value={fromDate}
                placeholderTextColor={COLORS.black}
                onTouchStart={Platform.OS === "ios" ? showFromDatePicker : null}
              />
            </View>
          </TouchableOpacity>
          <View style={{ width: 20 }} />
          <TouchableOpacity onPress={showToDatePicker} style={{ flex: 1 }}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={"To Date"}
                placeholderTextColor={COLORS.black}
                editable={false}
                value={toDate}
                onTouchStart={Platform.OS === "ios" ? showToDatePicker : null}
              />
            </View>
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
        {isLoading ? (
          <ActivityIndicator size="large" style={{ marginTop: MARGINS.m26 }} />
        ) : (
          <TouchableOpacity onPress={handleOnPressSubmit} style={styles.button}>
            <Text normal color={COLORS.white}>
              Submit
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAwareScrollView>
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
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF88",
  },
  input: {
    width: "100%",
    flex: 1,
    color: COLORS.black,
  },
  inputContainer: {
    width: "100%",
    height: 46,
    paddingLeft: 10,
    justifyContent: "center",
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
});
