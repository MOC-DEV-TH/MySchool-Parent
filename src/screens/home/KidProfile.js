import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, IMGS, MARGINS, PADDINGS, ROUTES } from "../../constants";
import CardItem from "../../components/UI/CardItem";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const KidProfile = (props) => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <Text medium color={COLORS.white} style={styles.title}>
          Mya Mya
        </Text>
        <CardItem
          name={"Attendance"}
          imageName={IMGS.attendance}
          navigateName={ROUTES.ATTENDANCE}
        />
        <CardItem
          name={"Time Table"}
          imageName={IMGS.timeTable}
          navigateName={ROUTES.TIME_TABLE_AND_ROUTINE}
        />
        <CardItem
          name={"Exams"}
          imageName={IMGS.exam}
          navigateName={ROUTES.EXAM}
        />
        <CardItem
          name={"Payment History"}
          imageName={IMGS.paymentHistory}
          navigateName={ROUTES.PAYMENT_HISTORY}
        />
        <CardItem
          name={"Homework"}
          imageName={IMGS.homework}
          navigateName={ROUTES.HOMEWORK}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default KidProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: MARGINS.m12,
    marginBottom: MARGINS.m20,
  },
});
