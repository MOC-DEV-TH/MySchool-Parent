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
  const dispatch = useDispatch();
  const header = ["Subject Name", "Grade", "Status"];
  const examResultHeader = ["Grade", "Min Mark", "Max Mark"];
  const [isRefreshing, setIsRefreshing] = useState(false);

  console.log("StudentID",student.id)
    console.log("ExamId",completedData.exam_id)

  //get all completed detail data
  const completedExamDetailData = useSelector(
    (state) => state.completedExamDetail.completedExamDetailData
  );
  //get all completed detail data
  const examResultData = useSelector(
    (state) => state.completedExamDetail.examResultData
  );

  //initial load data
  useEffect(() => {
    loadCompletedExamDetail();
    loadExamResultRuleData();
  }, []);

  //load completed detail data
  const loadCompletedExamDetail = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(
        completedExamDetailAction.getCompletedExamDetail(
          student.id,
          completedData.exam_id
        )
      );
    } catch (error) {}
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  //load completed detail data
  const loadExamResultRuleData = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(completedExamDetailAction.getExamResultRules());
    } catch (error) {}
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  const tableData = completedExamDetailData.map((data) => [
    data.subject_name,
    data.final_result.entry.toString() == "false"
      ? "-"
      : data.final_result.results.grade,
    data.final_result.pass === null
      ? "N/A"
      : data.final_result.pass.toString() == "false"
      ? "FAIL"
      : "PASS",
  ]);

  const examResultTableData = examResultData.map((data) => [
    data.name,
    data.min_mark,
    data.max_mark,
  ]);

  const element = (data, index) => (
    <View>
      <Text
        style={{
          color:
            data == "PASS"
              ? COLORS.present
              : data == "FAIL"
              ? COLORS.absent
              : COLORS.primary,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {data}
      </Text>
    </View>
  );

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: COLORS.black }}>
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
        <Table borderStyle={{ borderWidth: 0, borderColor: "transparent" }}>
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
                  borderBottomLeftRadius:
                    index === completedExamDetailData.length - 1 ? 12 : 0,
                  borderBottomRightRadius:
                    index === completedExamDetailData.length - 1 ? 12 : 0,
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

        <View style={{ height: 20 }} />
        <Text medium color={COLORS.white} style={styles.medium_text}>
          Result Rule
        </Text>
        <Table borderStyle={{ borderWidth: 0, borderColor: "transparent" }}>
          <Row
            data={examResultHeader}
            style={styles.head}
            textStyle={styles.header_text}
          />
          <Table>
            {examResultTableData.map((rowData, index) => (
              <TableWrapper
                key={index}
                style={{
                  flexDirection: "row",
                  backgroundColor: COLORS.white,
                  borderBottomLeftRadius:
                    index === examResultData.length - 1 ? 12 : 0,
                  borderBottomRightRadius:
                    index === examResultData.length - 1 ? 12 : 0,
                }}
              >
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={cellData}
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
