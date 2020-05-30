import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Txt from "../Txt";
import styles from "./Gallery.css";

const Gallery = () => {
  return (
    <View>
      <View>
        <Txt weight={600} customStyle={styles.txt}>
          Gallery
        </Txt>
      </View>
      <View style={styles.imgsBox}>
        <View style={styles.imgBox}>
          <TouchableOpacity style={{ width: "100%", height: "100%" }}>
            <Image style={styles.img} source={require("../../img/test.jpg")} />
          </TouchableOpacity>
        </View>
        <View style={styles.imgBox}>
          <TouchableOpacity style={{ width: "100%", height: "100%" }}>
            <Image style={styles.img} source={require("../../img/test.jpg")} />
          </TouchableOpacity>
        </View>
        <View style={styles.imgBox}>
          <TouchableOpacity style={{ width: "100%", height: "100%" }}>
            <Image style={styles.img} source={require("../../img/test.jpg")} />
          </TouchableOpacity>
        </View>
        <View style={styles.imgBox}>
          <TouchableOpacity style={{ width: "100%", height: "100%" }}>
            <Image style={styles.img} source={require("../../img/test.jpg")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Gallery;
