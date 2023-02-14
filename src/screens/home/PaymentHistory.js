import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import { COLORS, PADDINGS, MARGINS } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import { DataTable } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const PaymentHistory = () => {
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

  const Head = ({ title }) => {
    return (
      <View
      style={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text color={COLORS.white}>Invoice ID</Text>
    </View>
    );
  };

  const Cell = ({ itemName }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text>{itemName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text medium color={COLORS.white} style={styles.title}>
          Fees List
        </Text>
        <Text large color={COLORS.white} style={styles.name}>
          MG MG
        </Text>
        <Text small color={COLORS.white} style={styles.small_text}>
          Class - Grade 8 A
        </Text>

        <DataTable>
          <DataTable.Header
            style={{
              backgroundColor: COLORS.bgColor,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          >
            <Head title={"Invoice ID"}/>
            <Head title={"Type"}/>
            <Head title={"Due Date"}/>
            <Head title={"Amount"}/>
           
          </DataTable.Header>
          {data.map((rank, i, { length }) => (
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
                <TouchableOpacity>
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

              <Cell itemName={"Mid terms"}/>
              <Cell itemName={"DD/MM/YY"}/>
              <Cell itemName={"xxxxx"}/>
          
            </DataTable.Row>
          ))}
        </DataTable>
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
