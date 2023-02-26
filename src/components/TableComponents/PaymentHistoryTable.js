import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import Text from "@kaloraat/react-native-text";
import { DataTable } from "react-native-paper";
import { MARGINS, IMGS, COLORS, PADDINGS } from "../../constants";
import TableHead from "./TableHead";
import TableCell from "./TableCell";

const PaymentHistoryTable = (props) => {
  console.log("PaymentArray", props.paymentArray);
  return (
    <DataTable style={{ marginBottom: MARGINS.m14 }}>
      <View
        style={{
          backgroundColor:
            props.name == "Paid" ? COLORS.present : COLORS.absent,
          alignSelf: "flex-end",
          marginRight: 20,
          paddingLeft: PADDINGS.p16,
          paddingRight: PADDINGS.p16,
          paddingTop: PADDINGS.p2,
          paddingBottom: PADDINGS.p2,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
      >
        <Text color={COLORS.white}>{props.name}</Text>
      </View>
      <DataTable.Header
        style={{
          backgroundColor: COLORS.bgColor,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      >
        <TableHead title={"Invoice ID"} />
        <TableHead title={"Type"} />
        <TableHead title={"Due Date"} />
        <TableHead title={"Amount"} />
      </DataTable.Header>
      {props.paymentArray.map((data, i, { length }) => (
        <DataTable.Row
          style={{
            backgroundColor: COLORS.white,
            textAlign: "center",
            borderBottomLeftRadius: i + 1 === length ? 12 : 0,
            borderBottomRightRadius: i + 1 === length ? 12 : 0,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => props.onPress(props.transaction_no)}
            >
              <Text
                style={{
                  color: COLORS.textColorBlue,
                  textDecorationLine: "underline",
                  textAlign: "center",
                }}
              >
                xxxxx
              </Text>
            </TouchableOpacity>
          </View>

          <TableCell data={data.fee_type} />
          <TableCell data={data.due_date} />
          <TableCell data={data.amount} />
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default PaymentHistoryTable;

const styles = StyleSheet.create({});
