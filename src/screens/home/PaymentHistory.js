import { StyleSheet, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { COLORS, PADDINGS, MARGINS, ROUTES } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PaymentHistoryTable from "../../components/TableComponents/PaymentHistoryTable";
import { useSelector, useDispatch } from "react-redux";
import * as paymentHistoryAction from "../../store/actions/paymentHistory";

const PaymentHistory = ({ route, navigation }) => {
  const { studentData } = route.params;
  const dispatch = useDispatch();
  const [isRefreshing, setIsRefreshing] = useState(false);

  //initial load data
  useEffect(() => {
    loadPaymentHistoryData();
  }, []);

  //get payment history  data
  const paidData = useSelector((state) => state.paymentHistory.paid);
  const unpaidData = useSelector((state) => state.paymentHistory.unpaid);

  //load payment history  data
  const loadPaymentHistoryData = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(paymentHistoryAction.getAllPaymentHistory(studentData.id));
    } catch (error) {}
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  //handle press invoice id
  const handleOnPressPaidInvoiceId = (id) => {
    //navigation.navigate(ROUTES.INVOICE_DETAIL, { transactionId: id });
  };
  const handleOnPressUnPaidInvoiceId = (id) => {
    //navigation.navigate(ROUTES.INVOICE_DETAIL, { transactionId: id });
  };

  //render UI
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text medium color={COLORS.white} style={styles.title}>
          Fees List
        </Text>
        <Text large color={COLORS.white} style={styles.name}>
          {studentData.name}
        </Text>
        <Text small color={COLORS.white} style={styles.small_text}>
          Class - {studentData.class_name} {studentData.section}
        </Text>

        {isRefreshing ? (
          <ActivityIndicator size="large" />
        ) : (
          <View>
            {unpaidData.length != 0 ? (
              <PaymentHistoryTable
                name={"UnPaid"}
                paymentArray={unpaidData}
                onPress={handleOnPressUnPaidInvoiceId}
              />
            ) : undefined}
            {paidData.length != 0 ? (
              <PaymentHistoryTable
                name={"Paid"}
                paymentArray={paidData}
                onPress={handleOnPressPaidInvoiceId}
              />
            ) : undefined}
          </View>
        )}
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
    flexDirection: "row",
    marginBottom: MARGINS.m18,
  },
  text: {
    color: COLORS.black,
    fontWeight: "bold",
  },
});
