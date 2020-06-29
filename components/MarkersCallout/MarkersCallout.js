import React from "react";
import { Callout } from "react-native-maps";
import { View, Text } from "react-native";
import Txt from "../Txt";
import Logo from "../../img/logo/lg_red.svg";
import formatDescription from "../../functions/formatDescription"; /// zamienic na reg exp
import styles from "./MarkersCallout.css";

const MarkersCallout = ({ title, street, longDescription }) => {
  const description = formatDescription(longDescription);
  return (
    <Callout>
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

        {longDescription && (
          <View>
            <Text style={styles.descriptionTxt} numberOfLines={4}>
              {description}
            </Text>
          </View>
        )}
      </View>
    </Callout>
  );
};

export default MarkersCallout;
