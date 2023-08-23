import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { COLORS, MARGINS, PADDINGS } from "../../constants";
import ImageViewer from "react-native-image-zoom-viewer";
import { useSelector } from "react-redux";
import FlatListFormatData from "../../utils/FlatListFormatData";

const ActivityImageGallery = ({ route }) => {
  const { activityData } = route.params;
  const [viewerVisible, setViewerVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  //get base url
  const baseUrl = useSelector((state) => state.baseURL.baseUrl);

  const handleImagePress = (index, item) => {
    if (item.url != undefined) {
      setSelectedIndex(index);
      setViewerVisible(true);
    }
  };

  const handleCloseViewer = () => {
    setViewerVisible(false);
    setSelectedIndex(0);
  };

  //render flatList Item
  const renderImageItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => handleImagePress(index, item)}
      style={styles.imageContainer}
    >
      <Image source={{ uri: item.url }} style={styles.thumbnail} />
    </TouchableOpacity>
  );

  // map image array to object array
  const keyValueImageArray = activityData.image.map((value, index) => {
    return { url: baseUrl + value };
  });

  //filter empty image array for image viewer
  const filteredArray = keyValueImageArray.filter((item) => item.empty != true);
  console.log("ItemImageURL", filteredArray[3]);

  //render image view header
  const renderHeader = () => {
    return (
      <TouchableOpacity style={styles.closeButton} onPress={handleCloseViewer}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{activityData.title}</Text>
      <FlatList
        style={{ marginBottom: 40 }}
        data={FlatListFormatData(keyValueImageArray, 2)}
        renderItem={renderImageItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
      <Modal
        visible={viewerVisible}
        transparent={true}
        onRequestClose={handleCloseViewer}
        animationType="slide"
      >
        <ImageViewer
          imageUrls={filteredArray}
          index={selectedIndex}
          onSwipeDown={handleCloseViewer}
          enableSwipeDown={true}
          enablePreload={true}
          renderHeader={renderHeader}
          style={styles.modalContent}
        />
      </Modal>
    </View>
  );
};

export default ActivityImageGallery;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: PADDINGS.p10,
  },
  thumbnail: {
    width: Dimensions.get("window").width / 2 - 15,
    height: 170,
    resizeMode: "cover",
  },
  flatListContent: {
    paddingVertical: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
  title: {
    fontWeight: "bold",
    alignItems: "flex-start",
    marginTop: MARGINS.m10,
    marginBottom: MARGINS.m10,
    color: COLORS.white,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8, // Adjust margin as needed
    height: 100, // Set a fixed height for each item
    backgroundColor: "#f0f0f0", // Set your desired background color
    borderRadius: 8, // Add borderRadius for a nice look
  },
  modalContent: {
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        marginTop: Dimensions.get("window").height * 0.05,
      },
    }),
  },
});
