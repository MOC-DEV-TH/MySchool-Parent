import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, MARGINS, PADDINGS } from "../../constants";
import { useSelector } from "react-redux";
import { RestClientApi } from "../../network/RestApiClient";

const SendMessageHistory = () => {
  const authToken = useSelector((state) => state.auth.token);
  const baseUrl = useSelector((state) => state.baseURL.baseUrl);
  const [currentPage, setCurrentPage] = useState(1);
  const [moreLoading, setMoreLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(false);

  //get initial data
  useEffect(() => {
    getMessageList();
    return () => {};
  }, [currentPage]);

  //load initial data
  const getMessageList = (async) => {
    setMoreLoading(true);
    RestClientApi.getMessageList(currentPage, authToken, baseUrl).then(
      (res) => {
        console.log("MessageCount", res.data.data.length);
        setMessages([...messages, ...res.data.data]);
        setMoreLoading(false);
      }
    );
  };

  //flatList end reached
  const onEndReached = (page) => {
    if (!onEndReachedCalledDuringMomentum) {
      setCurrentPage(currentPage + 1);
      setMoreLoading(true);
      setOnEndReachedCalledDuringMomentum(true);
    }
  };

  //flatList end reacher loader
  const renderFooterLoader = () => {
    return moreLoading ? (
      <View style={{ marginVertical: MARGINS.m20 }}>
        <ActivityIndicator size={"large"} color={"#000"} />
      </View>
    ) : null;
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.contentText}>From : </Text>

          <Text style={styles.contentText}>{item.from_name}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.contentText}>To : </Text>
          <Text style={styles.contentText}>{item.to_name}</Text>
        </View>
      </View>
      <Text style={styles.description}>{item.text}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Message</Text>
      <FlatList
        initialNumToRender={15}
        data={messages}
        renderItem={renderItem}
        nestedScrollEnabled
        keyExtractor={(item, index) => index.toString()}
        onMomentumScrollBegin={() => setOnEndReachedCalledDuringMomentum(false)}
        onMomentumScrollEnd={onEndReached}
        onEndReachedThreshold={0.01}
        ListFooterComponent={renderFooterLoader}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SendMessageHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  contentText: {
    color: COLORS.black,
    marginBottom: MARGINS.m10,
    alignSelf: "center",
  },
  itemContainer: {
    padding: 10,
    borderBottomColor: "#ccc",
    backgroundColor: COLORS.white,
    marginTop: MARGINS.m10,
    borderRadius: 8,
  },
  title: {
    fontSize: 12,
    marginBottom: MARGINS.m10,
    marginTop: MARGINS.m10,
  },
  description: {
    fontSize: 12,
    color: COLORS.gray,
    marginBottom: MARGINS.m10,
  },
  title: {
    fontWeight: "bold",
    alignItems: "flex-start",
    marginTop: MARGINS.m6,
    color: COLORS.white,
  },
});
