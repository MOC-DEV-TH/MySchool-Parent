import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { COLORS, PADDINGS, MARGINS } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector } from "react-redux";

const HomeworkDetail = ({ route }) => {
  const { homeWorkData } = route.params;
  //get base url
  const baseUrl = useSelector((state) => state.baseURL.baseUrl);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Text medium color={COLORS.white} style={styles.title}>
          Homework
        </Text>

        <View style={styles.itemContainer}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <View>
              <Text color={COLORS.present}>Assigned Date:</Text>
              <Text color={COLORS.present}>{homeWorkData.assigned_date}</Text>
            </View>
            <View>
              <Text color={COLORS.absent}>Due Date:</Text>
              <Text color={COLORS.absent}>{homeWorkData.due_date}</Text>
            </View>
          </View>

          <Text
            style={{ fontSize: 16, fontWeight: "bold", marginTop: MARGINS.m10 }}
          >
            Subject{" "}
          </Text>
          <Text style={{ marginBottom: MARGINS.m10 }}>
            {homeWorkData.subject}
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: MARGINS.m4,
              marginBottom: MARGINS.m10,
            }}
          >
            {homeWorkData.title}
          </Text>
          {/* <Text style={{ marginBottom: MARGINS.m10 }}>
            {homeWorkData.title}
          </Text> */}

          <View style={styles.horizontalDivider} />

          <Image
            style={styles.image}
            source={{
              uri: baseUrl + "/" + homeWorkData.homework_img,
            }}
          />

          <Text style={styles.text}>{homeWorkData.description}</Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default HomeworkDetail;

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
  horizontalDivider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.black,
    marginBottom: MARGINS.m10,
  },
  image: {
    height: 200,
  },
  text: {
    marginTop: MARGINS.m10,
  },
});
