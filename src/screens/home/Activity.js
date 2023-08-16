import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import { COLORS, MARGINS, PADDINGS, ROUTES } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import * as activityAction from "../../store/actions/activity";

const Activity = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isRefreshing, setIsRefreshing] = useState(false);

  //get initial data
  useEffect(() => {
    loadActivities();
  }, []);

  //get billing history  data
  const activityData = useSelector((state) => state.activity.activityData);
  //get base url
  const baseUrl = useSelector((state) => state.baseURL.baseUrl);

  //load initial  data
  const loadActivities = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await dispatch(activityAction.getAllActivities());
    } catch (error) {}
    setIsRefreshing(false);
  }, [dispatch]);

  const handleOnPressItem = (data) => {
    navigation.navigate(ROUTES.ACTIVITY_GALLERY, { activityData: data });
  };

  const renderItem = ({ item }) => {
    console.log("ImageUrl", item.image[0]);
    return (
      <TouchableOpacity onPress={() => handleOnPressItem(item)}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: baseUrl + item.image[0] }}
            resizeMode="cover"
            style={{ height: 250, width: "100%",marginBottom:MARGINS.m6 }}
          />
          <Text style={styles.contextText}>{"Title : "+item.title}</Text>
          <Text style={styles.contextText} >{"Date : "+item.date}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {isRefreshing ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text style={styles.title}>Activity</Text>
          <FlatList
            style={{marginBottom:40}}
            data={activityData.data}
            renderItem={renderItem}
            nestedScrollEnabled
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  imageContainer: {
    padding: PADDINGS.p12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.gray,
    marginBottom:MARGINS.m14
  },
  title: {
    fontWeight: "bold",
    alignItems: "flex-start",
    marginTop: MARGINS.m10,
    marginBottom: MARGINS.m10,
    color: COLORS.white,
  },
  contextText:{
    color: COLORS.white,
  }
});
