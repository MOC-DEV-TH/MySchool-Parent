import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ImageBackground,
  Animated,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { COLORS, IMGS, MARGINS, PADDINGS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Text from "@kaloraat/react-native-text";
import Container from "../../components/UI/Container";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SlidingDot } from "react-native-animated-pagination-dots";
import ChildItem from "../../components/ItemComponents/ChildItem";
import UpComingEventItem from "../../components/ItemComponents/UpComingEventItem";

const Home = (props) => {
  const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(0)).current;
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
          </View>

          <FlatList
            data={child}
            horizontal={true}
            style={{ marginTop: MARGINS.m10 }}
            showsHorizontalScrollIndicator={false}
            renderItem={() => <ChildItem onPress={handleOnPressKidProfile} />}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            pagingEnabled
            decelerationRate={"normal"}
            scrollEventThrottle={16}
            contentContainerStyle={{ paddingRight: 10 }}
            keyExtractor={(item, index) => index.toString()}
          />

          <SlidingDot
            marginHorizontal={3}
            containerStyle={styles.containerStyle}
            data={child}
            scrollX={scrollX}
            dotSize={10}
            dotStyle={{ backgroundColor: COLORS.white }}
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
            renderItem={() => <UpComingEventItem />}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </KeyboardAwareScrollView>
    </Container>
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
    marginHorizontal: 10,
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
    marginTop: 50,
  },
  containerStyle: {
    top: 200,
  },
});
