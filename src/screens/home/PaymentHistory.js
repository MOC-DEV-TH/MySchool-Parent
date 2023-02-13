import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import { COLORS, PADDINGS, MARGINS } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";

const PaymentHistory = () => {
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
        <View style={{ flex: 0.8 }}>
          <Text style={styles.text}>Transaction No.</Text>
          <Text style={{ marginBottom: MARGINS.m8,fontWeight:"bold" }}>63e0a2f958d5a</Text>

          <Text style={styles.text}>Amount:</Text>
          <Text style={{ marginBottom: MARGINS.m8 ,fontWeight:"bold"}}>10000 MMK</Text>

          <Text style={styles.text}>Payment Type:</Text>
          <Text style={{ marginBottom: MARGINS.m8,fontWeight:"bold" }}> Monthly School Fees</Text>

          <Text style={styles.text}>Due Date:</Text>
          <Text style={{ marginBottom: MARGINS.m8,fontWeight:"bold" }}>20/02/2023</Text>

          <Text style={styles.text}>Pay Day: 6/02/2023</Text>
        </View>
        <View style={{ flex: 0.2,justifyContent:"space-between" }}>
        <Text style={styles.text}>Status</Text>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"flex-start"}}>
        <Ionicons name="radio-button-on" size={20} color={COLORS.red} />
        <Text style={styles.text}>Unpaid</Text>
        </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text medium color={COLORS.white} style={styles.title}>
          Fees List
        </Text>
        <Text large color={COLORS.white} style={styles.name}>
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

export default PaymentHistory;

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
    marginBottom:MARGINS.m12
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
    flexDirection: "row",
    marginBottom: MARGINS.m18,
  },
  text:{
    color:COLORS.black,
    fontWeight : "bold"
  }
});
