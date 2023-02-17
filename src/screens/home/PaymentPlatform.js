import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, PADDINGS, MARGINS, IMGS } from "../../constants";
import Text from "@kaloraat/react-native-text";

const PaymentPlatform = () => {
  const onPressMobileBanking = () => {
    console.log("Press Mobile Banking");
  };
  const onPressMobileWallet = () => {
    console.log("Press Mobile Wallet");
  };
  const onPressCardPayment = () => {
    console.log("Press Card Payment");
  };

  const CardButton = ({ image, name, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={image} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text color={COLORS.black} style={{ fontWeight: "bold" }}>
              {name}
            </Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Image source={IMGS.arrowBlue} style={{ marginLeft: MARGINS.m6 }} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        medium
        color={COLORS.white}
        style={{
          fontWeight: "bold",
          marginTop: MARGINS.m10,
          marginBottom: MARGINS.m22,
        }}
      >
        Payment Platform
      </Text>
      <CardButton
        name={"Mobile Banking"}
        image={IMGS.mobile_banking}
        onPress={onPressMobileBanking}
      />
      <CardButton
        name={"Mobile Wallet"}
        image={IMGS.mobile_wallet}
        onPress={onPressMobileWallet}
      />
      <CardButton
        name={"Card Payment"}
        image={IMGS.card_payment}
        onPress={onPressCardPayment}
      />
    </View>
  );
};

export default PaymentPlatform;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  card: {
    height: 68,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    justifyContent: "space-around",

    flexDirection: "row",
    marginBottom: MARGINS.m18,
  },
});
