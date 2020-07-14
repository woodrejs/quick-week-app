import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Txt from "../Txt";
import styles from "./Gallery.css";
import uuid from "uuid-random";

const Gallery = ({ data }) => {
  const images = data.map((img) => (
    <View style={styles.imgBox} key={uuid()}>
      <TouchableOpacity style={{ width: "100%", height: "100%" }}>
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
    </View>
  );
};

export default Gallery;
