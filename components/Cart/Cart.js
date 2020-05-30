import React from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import BckImg from "../../img/test.jpg";
import QwIcon from "../../img/logo/lg_white.svg";
import HeartIcon from "../../img/heart/heart_white.svg";
import styles from "./Cart.css";
import Txt from "../Txt";

const Cart = ({
  onPress,
  title = null,
  date = null,
  startDate = null,
  time = null,
  favoritesIcon = false,
  quicIcon = false,
  labelColor = null,
  distance = null,
  now = null,
  hour = null,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <ImageBackground source={BckImg} style={styles.mainBox}>
          <View style={styles.mask}></View>
          <View style={styles.dateBox}>
            <Txt weight={700} customStyle={styles.date}>
              {date}
              {now}
            </Txt>
          </View>
          <View style={styles.timeBox}>
            <Txt weight={700} customStyle={styles.time}>
              {time}
              {distance}
              {hour}
            </Txt>
            <Txt weight={700} customStyle={styles.start}>
              {startDate}
            </Txt>
          </View>
          <View style={{ flex: 1 }}></View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={{ ...styles.titleBox, ...{ backgroundColor: labelColor } }}>
        <TouchableOpacity onPress={onPress}>
          <Txt weight={700} customStyle={styles.title}>
            {title}
          </Txt>
        </TouchableOpacity>
      </View>
      <View style={styles.iconsBox}>
        {favoritesIcon && (
          <TouchableOpacity>
            <HeartIcon height={25} width={25} />
          </TouchableOpacity>
        )}
        {quicIcon && (
          <TouchableOpacity>
            <QwIcon height={25} width={25} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Cart;
