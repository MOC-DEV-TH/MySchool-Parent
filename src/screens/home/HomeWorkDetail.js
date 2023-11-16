import {
  StyleSheet,
  View,
  Image,
  Modal,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS, PADDINGS, MARGINS, IMGS } from "../../constants";
import Text from "@kaloraat/react-native-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector } from "react-redux";
import ImageViewer from "react-native-image-zoom-viewer";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as IntentLauncher from "expo-intent-launcher";
import LoadingDialog from "../../components/UI/LoadingDialog";

const HomeworkDetail = ({ route }) => {
  const { homeWorkData } = route.params;
  let [showLoadingDialog, setShowLoadingDialog] = useState(false);
  //get base url
  const baseUrl = useSelector((state) => state.baseURL.baseUrl);
  const [viewerVisible, setViewerVisible] = useState(false);
  const image = {
    url: baseUrl + "/" + homeWorkData.homework_img,
  };
  const pdfFile = homeWorkData.homework_pdf;
  const pdfFileName = homeWorkData.homework_pdf_name;

  console.log("Pdf file" + homeWorkData.homework_pdf);

  const handleImagePress = () => {
    setViewerVisible(true);
  };

  const handleCloseViewer = () => {
    setViewerVisible(false);
  };

  const openFile = async () => {
    setShowLoadingDialog(true);
    let remoteUrl = baseUrl + "/" + pdfFile;

    let localPath = `${FileSystem.documentDirectory}/${pdfFileName}`;

    FileSystem.downloadAsync(remoteUrl, localPath).then(async ({ uri }) => {
      const contentURL = await FileSystem.getContentUriAsync(uri);
      try {
        if (Platform.OS == "android") {
          await IntentLauncher.startActivityAsync(
            "android.intent.action.VIEW",
            {
              data: contentURL,
              flags: 1,
              type: "application/pdf",
            }
          );
        } else if (Platform.OS == "ios") {
          await Sharing.shareAsync(localPath);
        }
      } catch (error) {
        Alert.alert("INFO", JSON.stringify(error));
      } finally {
        setShowLoadingDialog(false);
      }
    });
  };

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
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <LoadingDialog
          showAlert={showLoadingDialog}
          setShowAlert={setShowLoadingDialog}
        />
        <Text medium color={COLORS.white} style={styles.title}>
          Homework
        </Text>

        <View style={styles.itemContainer}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <View>
              <Text color={COLORS.present}>Assigned Date:</Text>
              <Text color={COLORS.present}>{homeWorkData.assigned_date}</Text>
            </View>
            <View>
              <Text color={COLORS.absent}>Due Date:</Text>
              <Text color={COLORS.absent}>{homeWorkData.due_date}</Text>
            </View>
          </View>

          <Text
            style={{ fontSize: 16, fontWeight: "bold", marginTop: MARGINS.m10 }}
          >
            Subject{" "}
          </Text>
          <Text style={{ marginBottom: MARGINS.m10 }}>
            {homeWorkData.subject}
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: MARGINS.m4,
              marginBottom: MARGINS.m10,
            }}
          >
            {homeWorkData.title}
          </Text>

          <View style={styles.horizontalDivider} />
          {homeWorkData.homework_img === null ? (
            <Image
              resizeMode="cover"
              style={{ height: 250, width: "100%" }}
              source={IMGS.empty_thumbnail}
            />
          ) : (
            <TouchableOpacity onPress={handleImagePress}>
              <Image
                resizeMode="cover"
                style={{ height: 250 }}
                source={{
                  uri: baseUrl + "/" + homeWorkData.homework_img,
                }}
              />
            </TouchableOpacity>
          )}

          <Text style={styles.text}>{homeWorkData.description}</Text>

          {pdfFile === null ? undefined : (
            <TouchableOpacity style={styles.button} onPress={openFile}>
              <Text style={styles.button_text}>Download PDF</Text>
            </TouchableOpacity>
          )}
        </View>
        <Modal
          visible={viewerVisible}
          transparent={true}
          onRequestClose={handleCloseViewer}
          animationType="slide"
        >
          <ImageViewer
            imageUrls={[image]}
            onSwipeDown={handleCloseViewer}
            enableSwipeDown={true}
            enablePreload={true}
            renderHeader={renderHeader}
            style={styles.modalContent}
          />
        </Modal>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default HomeworkDetail;

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
    marginBottom: MARGINS.m18,
  },
  horizontalDivider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.black,
    marginBottom: MARGINS.m10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: COLORS.primary,
    marginVertical: MARGINS.m22,
  },
  text: {
    marginTop: MARGINS.m10,
  },
  button_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
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
