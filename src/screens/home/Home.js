import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { COLORS, IMGS, MARGINS, PADDINGS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Text from "@kaloraat/react-native-text";
import Carousel from "react-native-reanimated-carousel";
import Container from "../../components/Container";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const screenWidth = Dimensions.get("window").width;

const Home = (props) => {
  const navigation = useNavigation();

  const [child, setChild] = useState([
    {
      name: "Mg Mg",
    },
    {
      name: "Ma Ma",
    },
  ]);
  const [event, setEvent] = useState([
    {
      name: "1",
    },
    {
      name: "1",
    },
    {
      name: "1",
    },
  ]);


  const handleOnPressKidProfile = () => {
    navigation.navigate(ROUTES.KID_PROFILE);
  };

  const renderCarouselItems = (index) => {
    return (
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          borderRadius: 12,
          backgroundColor: COLORS.gradientForm,
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
      </View>
    );
  };

  const renderChildItems = (child) => {
    return (
      <View style={styles.childContainer}>
        <View
          style={{
            flex: 0.4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={IMGS.child} />
        </View>
        <View style={{ flex: 0.3, flexDirection: "column" }}>
          <Text medium color={COLORS.white} style={{ fontWeight: "bold" }}>
            Mya Mya
          </Text>
          <Text color={COLORS.white}>ID No......</Text>
          <Text color={COLORS.white}>Grade 2 (A)</Text>
        </View>
        <View style={{ flex: 0.3, justifyContent: "flex-end" }}>
          <Image source={IMGS.school_supplies} />
        </View>
      </View>
    );
  };

  const renderUpComingEvents = (child) => {
    return (
      <View style={styles.eventContainer}>
        <View
          style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}
        >
          <Image source={IMGS.group} />
        </View>
        <View style={{ flex: 0.7 }}>
          <View style={{ flexDirection: "column" }}>
            <Text medium>Parent/Teacher Conference</Text>
            <Text small color={COLORS.textColorBlue}>
              18th June 2023
            </Text>
            <Text tiny style={{ marginTop: MARGINS.m10 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Container>
      <StatusBar style="light" />

      <KeyboardAwareScrollView>
        <View style={styles.body}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text medium style={styles.welcomeText}>
              Welcome
              <Text medium style={styles.welcomeText}>
                (Name)
              </Text>
            </Text>
            <TouchableOpacity onPress={handleOnPressKidProfile}>
              <Image source={IMGS.arrow_right} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={child}
            horizontal={true}
            style={{ marginTop: MARGINS.m10 }}
            showsHorizontalScrollIndicator={false}
            renderItem={renderChildItems}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            keyExtractor={(item, index) => index.toString()}
          />
          <Carousel
            loop
            width={screenWidth - 20}
            height={140}
            style={{ marginTop: MARGINS.m16 }}
            autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            // onSnapToItem={(index) => console.log("current index:", index)}
            renderItem={({ index }) => renderCarouselItems(index)}
          />

          <Text medium style={styles.upcomingText}>
            Upcoming Events
          </Text>
          <FlatList
            data={event}
            numColumns={1}
            scrollEnabled={false}
            style={{ marginTop: MARGINS.m10 }}
            showsVerticalScrollIndicator={false}
            renderItem={renderUpComingEvents}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </KeyboardAwareScrollView>
    </Container>
    // </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
  body: {
    backgroundColor: COLORS.black,
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: PADDINGS.p18,
    paddingBottom: PADDINGS.p18,
  },
  actionBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.bgColor,
  },
  appIcon: {
    alignSelf: "center",
    alignItems: "center",
  },
  welcomeText: {
    color: COLORS.white,
  },
  upcomingText: {
    color: COLORS.white,
    marginTop: MARGINS.m14,
  },
  childContainer: {
    backgroundColor: COLORS.white,
    width: screenWidth - 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.bgColor,
    paddingBottom: PADDINGS.p10,
    paddingTop: PADDINGS.p10,
  },
  eventContainer: {
    backgroundColor: COLORS.white,
    height: 120,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: MARGINS.m8,
  },
});
