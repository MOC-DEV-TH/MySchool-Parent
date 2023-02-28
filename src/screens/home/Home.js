import {
  StyleSheet,
  View,
  FlatList,
  Animated,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS, MARGINS, PADDINGS, ROUTES } from "../../constants";
import Text from "@kaloraat/react-native-text";
import Container from "../../components/UI/Container";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SlidingDot } from "react-native-animated-pagination-dots";
import ChildItem from "../../components/ItemComponents/ChildItem";
import UpComingEventItem from "../../components/ItemComponents/UpComingEventItem";
import { getData } from "../../utils/SessionManager";
import AppConstants from "../../utils/AppConstants";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as homeActions from "../../store/actions/home";
import * as authActions from "../../store/actions/auth";


const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  //get home data
  const isLoading = useSelector((state) => state.home.loading);
  const studentData = useSelector((state) => state.home.studentData);
  const upComingEventData = useSelector((state) => state.home.eventData);

  //initial fetch home data
  useEffect(async () => {
    await getData(AppConstants.KEY_USER_DATA).then((value) => {
      if (value != null) {
        const transformedData = JSON.parse(value);
        const { token, userId, name } = transformedData;
        console.log("AuthToken", token);
        dispatch(authActions.setAuthToken(token, name, userId));
        dispatch(homeActions.getAllStudentData(token));
      }
    });
  }, []);

  //get expo token
  useEffect(() => {
    getData(AppConstants.KEY_EXPO_TOKEN).then((value) => {
      console.log("Expo Push Token", value);
    });
  });

  //handle event
  const handleOnPressKidProfile = (student) => {
    console.log(student.item);
    navigation.navigate(ROUTES.KID_PROFILE, { studentData: student.item });
  };

  //render UI
  return (
    <Container>
      <StatusBar style="light" />
      {isLoading ? (
        <ActivityIndicator
          size="large"
          style={{ alignSelf: "center", flex: 1 }}
        />
      ) : (
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
              data={studentData}
              horizontal={true}
              style={{ marginTop: MARGINS.m10 }}
              showsHorizontalScrollIndicator={false}
              renderItem={(itemData) => (
                <ChildItem
                  item={itemData.item}
                  onItemClick={handleOnPressKidProfile}
                />
              )}
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
              data={studentData}
              scrollX={scrollX}
              dotSize={10}
              dotStyle={{ backgroundColor: COLORS.white }}
            />

            <Text medium style={styles.upcomingText}>
              Upcoming Events
            </Text>
            <FlatList
              data={upComingEventData}
              numColumns={1}
              scrollEnabled={false}
              style={{ marginTop: MARGINS.m10 }}
              showsVerticalScrollIndicator={false}
              renderItem={(itemData) => (
                <UpComingEventItem item={itemData.item} />
              )}
              ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </KeyboardAwareScrollView>
      )}
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
    justifyContent: "center",
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
