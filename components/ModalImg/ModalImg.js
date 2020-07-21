import React from "react";
import { Modal, Image, View, TouchableWithoutFeedback } from "react-native";
import styles from "./ModalImg.css";

const ModalImg = ({ visible, onPress, img }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.box}>
          <Image source={{ uri: img }} style={styles.img} />
          <View style={styles.mask} />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalImg;
