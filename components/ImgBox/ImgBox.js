import React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";

const ImgBox = ({ onPress, img, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground source={{ uri: img }} style={styles.box}>
        <View style={styles.mask}></View>
        <View style={styles.content}>{children}</View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ImgBox;

const styles = StyleSheet.create({
  box: { height: "100%", width: "100%", position: "relative" },
  mask: { height: "100%", width: "100%", position: "absolute" },
  content: { height: "100%", width: "100%", position: "relative" },
});
