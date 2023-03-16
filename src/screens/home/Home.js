import {
  StyleSheet,
  View,
  FlatList,
  Animated,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS, MARGINS, PADDINGS, ROUTES, IMGS } from "../../constants";
import Text from "@kaloraat/react-native-text";
import Container from "../../components/UI/Container";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SlidingDot } from "react-native-animated-pagination-dots";
import ChildItem from "../../components/ItemComponents/ChildItem";
import UpComingEventItem from "../../components/ItemComponents/UpComingEventItem";
import { getData, setData } from "../../utils/SessionManager";
import AppConstants from "../../utils/AppConstants";
import React, { useEffect, useCallback, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as homeActions from "../../store/actions/home";
import * as authActions from "../../store/actions/auth";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationComponent from "../../components/ItemComponents/NotificationComponent";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const scrollX = useRef(new Animated.Value(0)).current;
  let [notiCount, setNotiCount] = useState("0");

  //initial fetch home data
  useEffect(async () => {
    loadHomeData();
  }, []);

  //get home data
  const isLoading = useSelector((state) => state.home.loading);
  const studentData = useSelector((state) => state.home.studentData);
  const upComingEventData = useSelector((state) => state.home.eventData);

  const getNotificationCount = useCallback(async () => {
    getData(AppConstants.KEY_NOTIFICATION_COUNT).then((notificationValue) => {
      console.log("New Notification Length", notificationValue);
      getData(AppConstants.LAST_NOTI_COUNT).then((lastNotificationValue) => {
        if (lastNotificationValue != null) {
          console.log("Last Notification Length", lastNotificationValue);
          if (parseInt(notificationValue) >= parseInt(lastNotificationValue)) {
            setNotiCount(
              parseInt(notificationValue) - parseInt(lastNotificationValue)
            );
            setData(
              AppConstants.KEY_NOTIFICATION_COUNT.KEY_NOTIFICATION_COUNT,
              (
                parseInt(notificationValue) - parseInt(lastNotificationValue)
              ).toString()
            );
            console.log(
              "Notification Length",
              (
                parseInt(notificationValue) - parseInt(lastNotificationValue)
              ).toString()
            );
          } else {
            console.log("Default Notification Length", notificationValue);
            setNotiCount(notificationValue);
            setData(
              AppConstants.KEY_NOTIFICATION_COUNT,
              notificationValue.toString()
            );
          }
        } else {
          console.log("New Notification Length", notificationValue);
          setNotiCount(notificationValue);
        }
      });
    });
  });

  const notificationCount = useSelector(
    (state) => state.notification.notificationCount
  );

  useEffect(() => {
    if (notificationCount == 0) {
      getNotificationCount();
      console.log("Notification Count", notificationCount);
    } else if (notificationCount == null) {
      setNotiCount(0);
      setData(AppConstants.KEY_NOTIFICATION_COUNT, "0");
    } else {
      console.log("Dispatch Notification Count", notificationCount);
      setNotiCount(notificationCount);
      setData(AppConstants.KEY_NOTIFICATION_COUNT, notificationCount);
    }
  });

  //focus screen handler
  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      loadHomeData();
      scrollX.setValue(0);
    });
    return focusHandler;
  }, [navigation]);

  //load home  data
  const loadHomeData = useCallback(
    async (token) => {
      await getData(AppConstants.KEY_USER_DATA).then((value) => {
        if (value != null) {
          const transformedData = JSON.parse(value);
          const { token, userId, name } = transformedData;
          console.log("AuthToken", token);
          dispatch(authActions.setAuthToken(token, name, userId));
          dispatch(homeActions.getAllStudentData(token));
        }
      });
    },
    [dispatch]
  );

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
  const handleOnPressMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const handleOnPressNotification = () => {
    navigation.navigate(ROUTES.NOTIFICATIONS);
  };

  //render UI
  return (
    <Container>
      <StatusBar style="light" />
      <SafeAreaView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          backgroundColor: COLORS.primary,
          paddingLeft: PADDINGS.p10,
          paddingRight: PADDINGS.p10,
        }}
      >
        <TouchableOpacity onPress={handleOnPressMenu}>
          <Ionicons name="menu" size={20} color={COLORS.white} />
        </TouchableOpacity>
        <Image source={IMGS.logoWhiteSmall} style={styles.appIcon} />
        <NotificationComponent
          onPress={handleOnPressNotification}
          notificationCount={notiCount}
        />
      </SafeAreaView>
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
