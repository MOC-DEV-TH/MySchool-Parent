import { StyleSheet, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { COLORS, PADDINGS, MARGINS, ROUTES } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BillingTable from "../../components/TableComponents/BillingTable";
import { useSelector, useDispatch } from "react-redux";
import * as billingHistoryAction from "../../store/actions/billingHistory";

const Billing = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [isRefreshing, setIsRefreshing] = useState(false);

  //initial load data
  useEffect(() => {
    loadBillingHistoryData();
  }, []);

  //get billing history  data
  const paidData = useSelector((state) => state.billingHistory.paid);
  const unpaidData = useSelector((state) => state.billingHistory.unpaid);

  //load billing history  data
  const loadBillingHistoryData = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(billingHistoryAction.getAllBillingHistory());
    } catch (error) {}
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing]);

  //handle press invoice id
  const handleOnPressPaidInvoiceId = (id) => {
    navigation.navigate(ROUTES.INVOICE_DETAIL, { transactionId: id });
  };
  const handleOnPressUnPaidInvoiceId = (id) => {
    navigation.navigate(ROUTES.INVOICE_DETAIL, { transactionId: id });
  };

  console.log("PaidDataLength", paidData.length);
  console.log("UnPaidDataLength", unpaidData.length);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text color={COLORS.white} style={styles.title}>
          Billing
        </Text>
        {isRefreshing ? (
          <ActivityIndicator size="large" />
        ) : (
          <View>
            {unpaidData.length != 0 ? (
              <BillingTable
                name={"UnPaid"}
                data={unpaidData}
                onPress={handleOnPressUnPaidInvoiceId}
              />
            ) : undefined}
            {paidData.length != 0 ? (
              <BillingTable
                name={"Paid"}
                data={paidData}
                onPress={handleOnPressPaidInvoiceId}
              />
            ) : undefined}
          </View>
        )}
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
