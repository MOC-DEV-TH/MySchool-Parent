import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import { COLORS, PADDINGS, MARGINS } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";

const Homework = () => {
  const [data, setData] = useState([
    {
      sbjName: "Myanmar",
      grade: "A",
      status: "Pass",
    },
    {
      sbjName: "English",
      grade: "B",
      status: "Pass",
    },
    {
      sbjName: "Maths",
      grade: "A",
      status: "Pass",
    },
  ]);

  const renderItem = () => {
    return (
      <View style={styles.itemContainer}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <View>
            <Text color={COLORS.present}>Assigned Date:</Text>
            <Text color={COLORS.present}>20/02/2023</Text>
          </View>
          <View>
            <Text color={COLORS.absent}>Due Date:</Text>
            <Text color={COLORS.absent}>20/02/2023</Text>
          </View>
        </View>

        <Text style={{ fontSize: 16,fontWeight:"bold",marginTop:MARGINS.m10 }}>Homework Title </Text>
        <Text style={{marginBottom:MARGINS.m10}}>Subject :English</Text>

        <View style={styles.horizontalDivider}/>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text medium color={COLORS.white} style={styles.title}>
          Homework
        </Text>
        <Text medium color={COLORS.white} style={styles.name}>
          MG MG
        </Text>
        <Text small color={COLORS.white} style={styles.small_text}>
          Class - Grade 8 A
        </Text>

        <FlatList
          data={data}
          style={{ marginTop: MARGINS.m10 }}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Homework;

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
    marginBottom: MARGINS.m12,
  },
  small_text: {
    alignItems: "flex-start",
    marginTop: MARGINS.m2,
    marginBottom: MARGINS.m12,
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
  itemContainer: {
    borderRadius: 12,
    backgroundColor: COLORS.white,
    padding: PADDINGS.p22,
    flex: 1,
    marginBottom: MARGINS.m18,
  },
  horizontalDivider : {
   flex:1,
   height:1,
   backgroundColor:COLORS.black,
   marginBottom:MARGINS.m10
  }
});
