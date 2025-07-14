import { Image, View } from "react-native";
import stepFormWidth from "../App";
import React from "react";

function ImageDescription(props) {
  return (
    <View style={styles.containerImage}>
    <Image source={props.imgSelection} style={styles.imageSelection} />
    </View>
  );
}
const styles = {
    containerImage: {
      width: stepFormWidth,
      flex: 1,
      backgroundColor: "#290e15",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      padding: 7,
    },
  };
export default ImageDescription;