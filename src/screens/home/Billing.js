import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { COLORS, PADDINGS, MARGINS } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { DataTable } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import BillingTable from "../../components/TableComponents/BillingTable";

const Billing = () => {
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

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text color={COLORS.white} style={styles.title}>
          Billing
        </Text>

        <BillingTable name={"Paid"} data={data} />
        <BillingTable name={"UnPaid"} data={data} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Billing;

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
    fontSize: 16,
  },
  itemContainer: {
    borderRadius: 12,
    backgroundColor: COLORS.white,
    padding: PADDINGS.p22,
    flex: 1,
    flexDirection: "row",
    marginBottom: MARGINS.m18,
  },
  text: {
    color: COLORS.black,
    fontWeight: "bold",
  },
});
