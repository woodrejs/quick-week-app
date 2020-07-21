import React, { useState } from "react";
import { View } from "react-native";
import styles from "./Cart.css";
import IconsSection from "../IconsSection";
import CartTitle from "../CartTitle";
import DIMENSIONS from "../../constans/DIMENSIONS";
import ModalDelete from "../ModalDelete";
import CartBox from "../CartBox";

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
  const { image, title } = data;
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <CartBox
        onPress={onPress}
        onLongPress={showModal}
        image={image}
        cornerTxt={cornerTxt}
        middleTxt={middleTxt}
      />

      <CartTitle onPress={onPress} color={color} title={title} />

      <IconsSection
        data={data}
        customStyle={styles.iconsBox}
        iconSize={DIMENSIONS.height * 0.04}
        heartIcon={heartIcon}
        quickIcon={quickIcon}
      />

      <ModalDelete
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
