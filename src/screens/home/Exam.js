import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ButtonGroup from "../../components/ButtonGroup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Text from "@kaloraat/react-native-text";
import { COLORS, PADDINGS, MARGINS, IMGS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Exam = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([
    { name: "one" },
    { name: "two" },
    { name: "three" },
  ]);
  const [itemState, setItemState] = useState(0);

  const onPressButton = (item) => {
    console.log(item);
    setItemState(item);
  };
  const renderUpcomingItem = () => {
    return (
      <View style={styles.card}>
        <View
          style={{ flex: 0.3, justifyContent: "center", alignItems: "center" }}
        >
          <Image source={IMGS.timeTable} />
        </View>
        <View style={{ flex: 0.7, justifyContent: "center" }}>
          <Text>9:00 am - 9:55</Text>
          <Text color={COLORS.black} style={{ fontWeight: "bold" }}>
            Maths
          </Text>
          <Text>U Ba</Text>
        </View>
      </View>
    );
  };
  const renderCompletedItem = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.EXAM_RESULT_DETAIL)}
      >
        <View style={styles.completedCard}>
          <Image source={IMGS.mmBook} />
          <View style={{ flex: 0.4 }}>
            <Text style={{ fontWeight: "bold" }}>Myanmar</Text>
            <Text>07 / 01 / 2023</Text>
          </View>

          <Image source={IMGS.arrowBlue} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <Text medium color={COLORS.white} style={styles.title}>
          Mya Mya
        </Text>
        <ButtonGroup
          buttons={["Upcoming", "Completed"]}
          onItemClick={onPressButton}
        />
        {itemState === 0 ? (
          <FlatList
            data={items}
            style={{ marginTop: MARGINS.m10 }}
            showsVerticalScrollIndicator={false}
            renderItem={renderUpcomingItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <FlatList
            data={items}
            style={{ marginTop: MARGINS.m10 }}
            showsVerticalScrollIndicator={false}
            renderItem={renderCompletedItem}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Exam;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: MARGINS.m6,
    marginBottom: MARGINS.m16,
  },
  card: {
    height: 68,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    marginBottom: MARGINS.m18,
  },
  completedCard: {
    height: 68,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: MARGINS.m20,
  },
});
