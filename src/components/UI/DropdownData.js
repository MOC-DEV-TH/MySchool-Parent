import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useSelector } from "react-redux";
import { COLORS, MARGINS } from "../../constants";

const DropdownData = ({ onItemClick, isToAdmin }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const teacherDDLList = useSelector(
    (state) => state.sendMessage.teacherDDLList
  );
  console.log("DDLList", teacherDDLList);

  const onChangeItem = (item) => {
    setValue(item.teacher_id);
    onItemClick(item.teacher_id);
    setIsFocus(false);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        showsVerticalScrollIndicator={true}
        containerStyle={{ borderColor: COLORS.black, borderRadius: 12 }}
        iconStyle={styles.iconStyle}
        data={isToAdmin ? [] : teacherDDLList}
        maxHeight={300}
        labelField="name"
        valueField="teacher_id"
        placeholder={!isFocus ? "" : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => onChangeItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: MARGINS.m14,
  },
  dropdown: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default DropdownData;
