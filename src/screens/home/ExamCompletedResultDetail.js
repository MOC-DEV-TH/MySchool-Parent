import { StyleSheet, View } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { Table, Row, TableWrapper, Cell } from "react-native-table-component";
import { COLORS, PADDINGS, MARGINS } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { useSelector, useDispatch } from "react-redux";
import * as completedExamDetailAction from "../../store/actions/completedExamDetail";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ExamCompletedResultDetail = ({ navigation, route }) => {
  const { student, completedData } = route.params;
  console.log("student", student);
  const dispatch = useDispatch();
  const header = ["Subject Name", "Grade", "Status"];
  const [isRefreshing, setIsRefreshing] = useState(false);

  //get all completed detail data
  const completedExamDetailData = useSelector(
    (state) => state.completedExamDetail.completedExamDetailData
  );

  //initial load data
  useEffect(() => {
    loadCompletedExamDetail();
  }, []);

  //load completed detail data
  const loadCompletedExamDetail = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(
        completedExamDetailAction.getCompletedExamDetail(
          student.id,
          completedData.id
        )
      );
    } catch (error) {}
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  const tableData = completedExamDetailData.map((data) => [
    data.subject_name,
    data.final_result.entry.toString() == "false"
      ? "-"
      : data.final_result.results.grade,
    data.final_result.pass.toString() == "false" ? "FAIL" : "PASS",
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
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Text medium color={COLORS.white} style={styles.title}>
          Exam Results
        </Text>
        <Text large color={COLORS.white} style={styles.name}>
          {student.name}
        </Text>
        <Text small color={COLORS.white} style={styles.small_text}>
          Class - {student.class_name}
        </Text>

        <Text medium color={COLORS.white} style={styles.medium_text}>
          {completedData.exam_name}
        </Text>
        <Table borderStyle={{ borderWidth: 1, borderColor: "transparent"}}>
          <Row
            data={header}
            style={styles.head}
            textStyle={styles.header_text}
          />
          <Table>
            {tableData.map((rowData, index) => (
              <TableWrapper
                key={index}
                style={{
                  flexDirection: "row",
                  backgroundColor: COLORS.white,
                  borderBottomLeftRadius: index - 2 === rowData.length ? 12 : 0,
                  borderBottomRightRadius:
                    index - 2 === rowData.length ? 12 : 0,
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
    </KeyboardAwareScrollView>
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
