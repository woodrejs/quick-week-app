import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Txt from "../Txt";
import styles from "./Gallery.css";
import uuid from "uuid-random";
import ModalImg from "../ModalImg";

const Gallery = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [img, setImg] = useState(null);

  const showModal = (img) => {
    setModalVisible(true);
    setImg(img);
  };
  const hideModal = () => setModalVisible(false);

  const images = data.map((img) => (
    <View style={styles.imgBox} key={uuid()}>
      <TouchableOpacity
        style={{ width: "100%", height: "100%" }}
        onPress={() => showModal(img.standard)}
      >
        <Image style={styles.img} source={{ uri: img.standard }} />
      </TouchableOpacity>
    </View>
  ));

  return (
    <View>
      <View>
        <Txt weight={600} customStyle={styles.txt}>
          Gallery
        </Txt>
      </View>
      <View style={styles.imgsBox}>{images}</View>
      <ModalImg visible={modalVisible} onPress={hideModal} img={img} />
    </View>
  );
};

export default Gallery;
