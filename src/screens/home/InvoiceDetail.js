import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { COLORS, MARGINS, PADDINGS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const InvoiceDetail = () => {
  const navigation = useNavigation();

  const CustomText = ({ label, value }) => {
    return (
      <View style={styles.item}>
        <Text color={COLORS.black} style={{ fontWeight: "bold" }}>
          {label}
        </Text>
        <Text color={COLORS.black}>{value}</Text>
      </View>
    );
  };
  const Divider = () => {
    return <View style={styles.divider} />;
  };
  const handleOnPressPayNow = () => {
    navigation.navigate(ROUTES.PAYMENT_PLATFORM);
  };

  return (
    <View style={styles.container}>
      <Text
        medium
        color={COLORS.white}
        style={{ fontWeight: "bold", marginTop: MARGINS.m10 }}
      >
        Invoice Detail
      </Text>
      <View style={styles.box}>
        <CustomText label={"Name"} value={"Mya Mya"} />
        <CustomText label={"Class"} value={"Grade 8(A)"} />
        <CustomText label={"Type"} value={"First Term School Fees"} />
        <CustomText label={"Invoice ID"} value={"XXXXX"} />
        <CustomText label={"Invoice Date"} value={"DD/MM/YYYY"} />
        <CustomText label={"Due Date"} value={"DD/MM/YYYY"} />
        <Divider />
        <CustomText label={"Amount"} value={"200000 MMK"} />
        <CustomText label={"Tax(5%)"} value={"10000 MMK"} />
        <CustomText label={"Total Due"} value={"210000 MMK"} />

        <TouchableOpacity onPress={handleOnPressPayNow}>
          <View style={styles.button}>
            <Text medium style={{ fontWeight: "bold" }} color={COLORS.white}>
              Pay Now
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InvoiceDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  box: {
    padding: PADDINGS.p16,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginTop: MARGINS.m22,
  },
  item: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: MARGINS.m14,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.black,
    marginBottom: MARGINS.m14,
  },
  button: {
    backgroundColor: COLORS.primary,
    alignSelf: "center",
    borderRadius: 12,
    marginTop: MARGINS.m24,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    padding: PADDINGS.p14,
  },
});
