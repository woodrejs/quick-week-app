import React from "react";
import { Callout } from "react-native-maps";
import { View, Text } from "react-native";
import Txt from "../Txt";
import Logo from "../../img/logo/lg_red.svg";
import styles from "./MarkersCallout.css";
import { useDispatch } from "react-redux";
import { storePlace, storeEvent } from "../../functions/setInStore";

const MarkersCallout = ({ data, navigation }) => {
  const { title, street, longDescription, type, id } = data;
  const dispatch = useDispatch();

  const handlePress = async () => {
    type ? await storePlace(id, dispatch) : await storeEvent(id, dispatch);
    navigation.navigate("Event");
  };

  return (
    <Callout onPress={handlePress}>
      <View style={styles.box}>
        <View style={styles.top}>
          <Txt customStyle={styles.title} weight={600}>
            {title}
          </Txt>
        </View>

        <View style={styles.mid}>
          <Logo height={20} width={20} />
          <Txt customStyle={styles.adress} weight={500}>
            {street}
          </Txt>
        </View>

        <View>
          <Text
            style={styles.descriptionTxt}
            ellipsizeMode="head"
            numberOfLines={4}
          >
            {longDescription}
          </Text>
        </View>
      </View>
    </Callout>
  );
};

export default MarkersCallout;
