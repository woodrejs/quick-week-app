import React, { useState } from "react";
import { View } from "react-native";
import styles from "./Cart.css";
import Txt from "../Txt";
import ImgBox from "../ImgBox";
import IconsSection from "../IconsSection";
import CartTitle from "../CartTitle";
import DIMENSIONS from "../../constans/DIMENSIONS";
import CustomModal from "../CustomModal";

const Cart = ({
  onPress,
  data,
  color,
  cornerTxt,
  heartIcon = true,
  middleTxt,
  quickIcon = true,
  type,
  collection,
}) => {
  const { id, image, title } = data;
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <ImgBox onPress={onPress} img={image} onLongPress={showModal}>
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
      <CustomModal
        data={data}
        type={type}
        visible={modalVisible}
        onPress={hideModal}
        collection={collection}
      />
    </View>
  );
};

export default Cart;
