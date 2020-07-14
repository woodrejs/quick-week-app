import React from "react";
import { View } from "react-native";
import styles from "./Cart.css";
import Txt from "../Txt";
import ImgBox from "../ImgBox";
import IconsSection from "../IconsSection";
import CartTitle from "../CartTitle";
import DIMENSIONS from "../../constans/DIMENSIONS";

const Cart = ({
  onPress,
  data,
  color,
  cornerTxt,
  heartIcon = true,
  middleTxt,
  quickIcon = true,
  type,
}) => {
  const { id, image, title } = data;

  return (
    <View style={styles.container}>
      <ImgBox onPress={onPress} img={image}>
        <View style={styles.cornerBox}>
          <Txt weight={700} customStyle={styles.cornerTxt}>
            {cornerTxt}
          </Txt>
        </View>
        <View style={styles.middleBox}>
          <Txt weight={700} customStyle={styles.middleTxt}>
            {middleTxt}
          </Txt>
        </View>
      </ImgBox>

      <CartTitle onPress={onPress} color={color}>
        {title}
      </CartTitle>

      <IconsSection
        id={id}
        image={image}
        title={title}
        customStyle={styles.iconsBox}
        iconSize={DIMENSIONS.height * 0.04}
        heartIcon={heartIcon}
        quickIcon={quickIcon}
        type={type}
      />
    </View>
  );
};

export default Cart;
