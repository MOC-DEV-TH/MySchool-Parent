import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { COLORS, PADDINGS, MARGINS, IMGS } from "../../constants";
import Text from "@kaloraat/react-native-text";

const ExamUpcomingResultDetail = () => {
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

  const renderUpcomingItem = () => {
    return (
      <View style={styles.card}>
        <View style={{ justifyContent: "center", alignItems: "center",flex:0.4 }}>
          <Image source={IMGS.timeTable} />
        </View>
        <View style={{ justifyContent: "center",flex:0.6 }}>
          <Text>9:00 am - 9:55</Text>
          <Text color={COLORS.black} style={{ fontWeight: "bold" }}>
            Maths
          </Text>
          <Text>U Ba</Text>
        </View>
      </View>
    );
  };
  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: COLORS.gray,
          marginLeft:MARGINS.m10,
          marginRight:MARGINS.m10
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text medium color={COLORS.white} style={styles.title}>
        Feb Monthly Exam
      </Text>
      <View style={{ backgroundColor: COLORS.white, borderRadius: 12 }}>
        <FlatList
          data={resultData}
          style={{ marginTop: MARGINS.m10 }}
          showsVerticalScrollIndicator={false}
          renderItem={renderUpcomingItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={FlatListItemSeparator}
        />
      </View>
    </View>
  );
};

export default ExamUpcomingResultDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  card: {
    borderRadius: 12,
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems:"center",
    flexDirection: "row",
    paddingTop:PADDINGS.p10,
    paddingBottom:PADDINGS.p10
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: MARGINS.m12,
    marginBottom: MARGINS.m20,
  },
});
