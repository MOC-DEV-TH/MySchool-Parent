import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Table, Row, TableWrapper, Cell } from "react-native-table-component";
import { COLORS, PADDINGS, MARGINS } from "../../constants";
import Text from "@kaloraat/react-native-text";

const ExamCompletedResultDetail = () => {
  const header = ["Subject Name", "Grade", "Status"];
  const [resultData, setResultData] = useState([
    {
      sbjName: "Myanmar",
      grade: "A",
      status: "PASS",
    },
    {
      sbjName: "English",
      grade: "B",
      status: "PASS",
    },
    {
      sbjName: "Maths",
      grade: "A",
      status: "FAIL",
    },
  ]);

  const tableData = resultData.map((data) => [
    data.sbjName,
    data.grade,
    data.status,
  ]);
  const element = (data, index) => (
    <View>
      <Text
        style={{
          color: data == "PASS" ? COLORS.present : COLORS.absent,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {data}
      </Text>
    </View>
  );
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

      <Text medium color={COLORS.white} style={styles.medium_text}>
        October Monthly Exams
      </Text>
      <Table borderStyle={{borderWidth: 1,borderColor:"transparent"}}>
        <Row data={header} style={styles.head} textStyle={styles.header_text} />
        <Table>
          {tableData.map((rowData, index) => (
            <TableWrapper
              key={index}
              style={{
                flexDirection: "row",
                backgroundColor: COLORS.white,
                borderBottomLeftRadius: index + 1 === rowData.length ? 12 : 0,
                borderBottomRightRadius: index + 1 === rowData.length ? 12 : 0,
              }}
            >
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 2 ? element(cellData, index) : cellData}
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
      </Table>
    </View>
  );
};

export default ExamCompletedResultDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  text: { textAlign: "center", fontWeight: "100" },
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
  head: {
    height: 40,
    backgroundColor: COLORS.bgColor,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  text: { margin: 6, color: COLORS.black, textAlign: "center" },
  header_text: { margin: 6, color: COLORS.white, textAlign: "center" },
  textCell: { margin: 6, color: COLORS.black, textAlign: "center" },
  row: { flexDirection: "row", backgroundColor: COLORS.white },
});
