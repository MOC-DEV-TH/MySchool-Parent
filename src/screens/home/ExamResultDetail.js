import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Table, Row, Rows } from "react-native-table-component";
import { COLORS, PADDINGS, MARGINS } from "../../constants";
import Text from "@kaloraat/react-native-text";

const ExamResultDetail = () => {
  const header = ["Subject Name", "Grade", "Status"];
  const [resultData, setResultData] = useState([
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
  const data = [
    ["Myanmar", "A", "Pass"],
    ["English", "B", "Pass"],
    ["Maths", "C", "Pass"],
  ];
  return (
    <View style={styles.container}>
     <Text medium color={COLORS.white} style={styles.title}>Exam Results</Text>
     <Text large color={COLORS.white} style={styles.name}>MG MG</Text>
     <Text small color={COLORS.white} style={styles.small_text}>Class - Grade 8 A</Text>

     <Text medium color={COLORS.white} style={styles.medium_text}>October Monthly Exams</Text>
      <Table
        borderStyle={{
          borderWidth: 1,
          borderColor: "#c8e1ff",
        }}x
      >
        <Row data={header} style={styles.head} textStyle={styles.text} />
        <Rows data={data} style={styles.cell} textStyle={styles.textCell} />
      </Table>
    </View>
  );
};

export default ExamResultDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  title: {
    fontWeight: "bold",
    alignItems:"flex-start",
    marginTop: MARGINS.m6,
    marginBottom: MARGINS.m16,
  },
  small_text: {
    alignItems:"flex-start",
    marginTop: MARGINS.m2,
  },
  medium_text: {
    alignItems:"flex-start",
    marginTop: MARGINS.m18,
    marginBottom: MARGINS.m4,
  },
  name: {
    fontWeight: "bold",
    alignItems:"flex-start",
    marginTop: MARGINS.m2,
  },
  head: { height: 40, backgroundColor: COLORS.bgColor },
  text: { margin: 6, color: COLORS.white, textAlign: "center" },
  cell: {
    backgroundColor: COLORS.white,
  },
  textCell: { margin: 6, color: COLORS.black, textAlign: "center" },
});
